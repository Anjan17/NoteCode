import { useState, useEffect } from 'react';
import { api } from '../../lib/api';
import { useParams } from 'react-router';
import { Editor } from '../Editor/Editor';
import './styles.css';

const SUPPORTED_LANGUAGES = [
  { value: 'html', label: 'HTML' },
  { value: 'css', label: 'CSS' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'python', label: 'Python' },
  { value: 'java', label: 'Java' },
  { value: 'csharp', label: 'C#' },
  { value: 'ruby', label: 'Ruby' },
];

const MOCK_TEMPATES = [
  { language: 'html', content: '<html><body><h1>Hello World</h1></body></html>' },
  { language: 'css', content: 'body { background-color: #f0f0f0; }' },
  { language: 'javascript', content: 'console.log("Hello World");' },
  { language: 'typescript', content: 'console.log("Hello World");' },
  { language: 'python', content: 'print("Hello World")' },
  { language: 'java', content: 'System.out.println("Hello World");' },
  { language: 'csharp', content: 'Console.WriteLine("Hello World");' },
  { language: 'ruby', content: 'puts "Hello World"' },
];

const EditorContainer = () => {
  const [language, setLanguage] = useState('html');
  const [codeContent, setCodeContent] = useState({});
  const [sharingDisabled, setSharingDisabled] = useState(false);
  const [shareableLink, setShareableLink] = useState('');
  const params = useParams();

  const fetchAndUpdateTemplates = async () => {
    const templates = localStorage.getItem('templates');
    if (templates) {
      const templatesData = JSON.parse(templates);
      setCodeContent({
        id: crypto.randomUUID(),
        content: templatesData.find((t) => t.language === 'html').content,
      });
      setLanguage('html');
    }
    localStorage.setItem('templates', JSON.stringify(MOCK_TEMPATES));
    setCodeContent({
      content: MOCK_TEMPATES.find((t) => t.language === 'html').content,
    });
    setLanguage('html');
    // try {
    //     const response = await axios.get('/api/notecode/templates');
    //     localStorage.setItem('templates', JSON.stringify(response.data));
    //     return response.data;
    // } catch (error) {
    //     console.error('Error fetching templates:', error);
    //     return [];
    // }
  };

  useEffect(() => {
    if (params.id) {
      api
        .get(`/notecode/?id=${params.id}`)
        .then((response) => {
          setCodeContent({
            id: response.data?.id || response?.data?._id,
            content: response.data?.content,
          });
          setLanguage(response.data.lang);
          setSharingDisabled(true);
        })
        .catch((error) => {
          console.error('Error getting code content:', error);
          setCodeContent({ id: '', content: '' });
          setLanguage('html');
        });
    } else {
      fetchAndUpdateTemplates();
    }
  }, [params?.id]);

  const handleShare = async () => {
    console.log('Sharing code...');
    try {
      const response = await api.post('/notecode', {
        content: codeContent.content,
        id: codeContent.id,
        lang: language,
      });
      console.log(response.data);
      setShareableLink(`http://localhost:5173/${response.data?.savedCodeSnippet?.id}`)
      setSharingDisabled(true);
    } catch (e) {
      console.log('Error while saving the code snipped', e);
    }
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    setCodeContent((prevValue) => ({
      ...prevValue,
      content: MOCK_TEMPATES.find((t) => t.language === e.target.value).content,
    }));
  };

  const handleContentChange = (content) => {
    setCodeContent((prevValue) => ({ ...prevValue, content }));
    setSharingDisabled(false);
  };

  return (
    <div className="editor-container">
      <Editor
        language={language}
        content={codeContent.content}
        handleContentChange={handleContentChange}
      />
      <div className="editor-footer-container">
        <div className="editor-footer-container-left">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="rounded-xl px-4 py-2 bg-gray-100 border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={params?.id}
          >
            {SUPPORTED_LANGUAGES.map((l) => (
              <option key={l.value} value={l.value}>
                {l.label}
              </option>
            ))}
          </select>
        </div>
        <div className="editor-footer-container-right">
          {shareableLink?.length ? <div className='share-link overflow-auto white-space:no-wrap' style={{
            width: '200px',
            whiteSpace: 'nowrap'
          }}>{shareableLink}</div> : null}
          <button
            className={`rounded-xl px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 mx-2 ${
              sharingDisabled ? 'disabled:cursor-not-allowed disabled:opacity-50' : ''
            }`}
            onClick={handleShare}
            disabled={sharingDisabled}
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditorContainer;
