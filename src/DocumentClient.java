//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class DocumentClient {
    public static void main(String[] args) {

        Document d1 = DocumentFactory.getDocument("pdf");
        d1.generate();
        Document d2 = DocumentFactory.getDocument("excel");
        d2.generate();
        Document d3 = DocumentFactory.getDocument("word");
        d3.generate();
    }
  }
