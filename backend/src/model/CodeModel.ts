import mongoose from 'mongoose'

const codeModelSchema = new mongoose.Schema({
    id: { type: String },
    content: { type: String, required: true },
    lang: { type: String, required: true },
    lastUpdatedAt: { type: Date, default: Date.now() }
})

codeModelSchema.set('toJSON', {
  virtuals: true,        // include virtuals such as `id`
  versionKey: false,     // drop __v
  transform: (doc: any, ret: any) => {
    ret.id = ret._id.toString();
    delete ret._id;
  }
});

export default mongoose.model('CodeModel', codeModelSchema);