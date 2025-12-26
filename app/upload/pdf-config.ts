import { pdfjs } from 'react-pdf'

// Use cdnjs (has proper CORS headers)
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`