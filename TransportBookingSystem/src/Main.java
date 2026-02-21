public class Main {
    public static void main(String[] args) {
        Transport t1 = TransportFactory.getTransport("car");
        t1.book();

        Transport t2 = TransportFactory.getTransport("bike");
        t2.book();

        Transport t3 = TransportFactory.getTransport("bus");
        t3.book();
    }
}