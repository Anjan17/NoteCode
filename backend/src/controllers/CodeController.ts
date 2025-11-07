import { Request, Response } from "express";
import { Types } from "mongoose";

import CodeModel from '../model/CodeModel'

export const getCodeDetails = async (req: Request, res: Response) => {
    
    try {
        const queryId = req.query.id as string;
        
        // Search by custom id or MongoDB _id
        let details = await CodeModel.findOne({ id: queryId });
        
        // If not found and queryId is valid ObjectId, try searching by _id
        if (!details && Types.ObjectId.isValid(queryId)) {
            details = await CodeModel.findById(queryId);
        }
        
        res.json(details);
    } catch (e) {
        res.status(500).json({ message: 'code snippet not found'})
    }

}


export const saveCodeDetails = async (req: Request, res: Response) => {

    try {
        const { id, content, lang, generateNewUrl } = req.body;
        
        // Check if id is present in the request body
        if (id) {
            // Try to find and update existing entry
            const existingSnippet = await CodeModel.findOne({ id });
            
            if (existingSnippet) {
                // Update existing entry
                existingSnippet.content = content;
                existingSnippet.lang = lang;
                existingSnippet.lastUpdatedAt = new Date();
                await existingSnippet.save();
                
                res.json({ message: "Code snippet updated successfully", savedCodeSnippet: existingSnippet });
            } else {
                // Create new entry if id not found
                const savedCodeSnippet = new CodeModel({
                    id,
                    content,
                    lang,
                    lastUpdatedAt: new Date(),
                });
                await savedCodeSnippet.save();
                res.json({ message: "New code snippet added successfully", savedCodeSnippet });
            }
        } else {
            // Create new entry if no id provided
            const savedCodeSnippet = new CodeModel({
                content,
                lang,
                lastUpdatedAt: new Date(),
            });
            await savedCodeSnippet.save();
            res.json({ message: "New code snippet added successfully", savedCodeSnippet });
        }
    }
    catch (e) {
        res.status(500).json({ error: 'Failed to save code snippet' });
    }
}