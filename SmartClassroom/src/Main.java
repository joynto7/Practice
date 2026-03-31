public class Main {
    public static void main(String[] args) {
        ClassroomFacade classroom = new ClassroomFacade();
        classroom.startClass();  // Turns everything ON
        classroom.endClass();    // Turns everything OFF
    }
}