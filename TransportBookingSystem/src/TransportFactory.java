public class TransportFactory {
    public static Transport getTransport(String type){
        switch (type.toLowerCase()){
            case "car": return new Car();
            case "bike": return  new Bike();
            case "bus" : return new Bus();
            default: throw new IllegalArgumentException("Unknown transport type: " + type);



        }
    }
}
