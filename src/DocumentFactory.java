public class DocumentFactory {
    public static  Document getDocument(String type){
        switch(type.toLowerCase()){
            case "pdf":return new PDFDocument();
            case "excel": return new ExcelDocument();
            case "word" : return new WordDocument();
            default: throw new IllegalArgumentException("Unknown document type: " + type);        }
    }
}
