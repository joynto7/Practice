class ClassroomFacade {
    private LightingSystem lighting = new LightingSystem();
    private TemperatureControlSystem temp = new TemperatureControlSystem();
    private ProjectorSystem projector = new ProjectorSystem();

    public void startClass() {
        lighting.turnOn();
        temp.turnOnAC();
        projector.turnOnProjector();
    }

    public void endClass() {
        lighting.turnOff();
        temp.turnOffAC();
        projector.turnOffProjector();
    }
}
