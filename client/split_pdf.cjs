const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const PRODUCT_PDF = "c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets\\technical_specification_paper.pdf";
const OUTPUT_DIR = "c:\\Users\\ayanr\\Downloads\\NRAIL-main (1)\\NRAIL-main\\client\\src\\assets\\specs";

async function splitPdf() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const data = fs.readFileSync(PRODUCT_PDF);
    const pdfDoc = await PDFDocument.load(data);
    const pageCount = pdfDoc.getPageCount();

    const productNames = [
        'nr_shine_ss',
        'nr_shine',
        'nr_excel_ss',
        'nr_excel',
        'nr_excel_ss_ps',
        'nr_maxima_ss',
        'nr_maxima',
        'nr_classic_ss',
        'nr_classic',
        'nr_brilliance',
        'nr_copier'
    ];

    for (let i = 0; i < pageCount; i++) {
        const subDoc = await PDFDocument.create();
        const [copiedPage] = await subDoc.copyPages(pdfDoc, [i]);
        subDoc.addPage(copiedPage);
        const pdfBytes = await subDoc.save();
        const outputFileName = `${productNames[i]}.pdf`;
        fs.writeFileSync(path.join(OUTPUT_DIR, outputFileName), pdfBytes);
        console.log(`Saved: ${outputFileName}`);
    }
}

splitPdf().catch(console.error);
