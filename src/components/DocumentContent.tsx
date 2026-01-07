import { FileText, Award, Download } from 'lucide-react';

export function DocumentContent() {
  const certificates = [
    { name: 'React Developer Certification', issuer: 'Meta', date: '2023', status: 'placeholder' },
    { name: 'JavaScript Fundamentals', issuer: 'FreeCodeCamp', date: '2022', status: 'placeholder' },
    { name: 'TypeScript Mastery', issuer: 'Microsoft', date: '2023', status: 'placeholder' },
  ];

  const documents = [
    { name: 'Resume.pdf', type: 'PDF', size: '245 KB', status: 'placeholder' },
    { name: 'Portfolio.pdf', type: 'PDF', size: '1.2 MB', status: 'placeholder' },
    { name: 'Cover Letter.docx', type: 'Word', size: '89 KB', status: 'placeholder' },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Documents</h1>

      {/* Certificates Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-5 h-5 text-yellow-500" />
          <h2 className="text-lg font-semibold text-gray-800">Certificates</h2>
        </div>

        <div className="grid gap-4">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-yellow-500" />
                <div>
                  <h3 className="font-medium text-gray-900">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                  {cert.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Documents Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText className="w-5 h-5 text-blue-500" />
          <h2 className="text-lg font-semibold text-gray-800">Documents</h2>
        </div>

        <div className="grid gap-4">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-500" />
                <div>
                  <h3 className="font-medium text-gray-900">{doc.name}</h3>
                  <p className="text-sm text-gray-600">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                  {doc.status}
                </span>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-blue-800">
          <strong>Note:</strong> These are placeholder items. Replace with actual certificates and documents as needed.
        </p>
      </div>
    </div>
  );
}
