'use client'

export default function PDFViewer({ pdfUrl, fileName }: { pdfUrl: string; fileName: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-white">Preview: {fileName}</h3>
        <a 
          href={pdfUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
        >
          Open in New Tab
        </a>
      </div>
      
      <div className="bg-slate-100 rounded-lg overflow-hidden" style={{ height: '600px' }}>
        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title={fileName}
        />
      </div>
    </div>
  )
}