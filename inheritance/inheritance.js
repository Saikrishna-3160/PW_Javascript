class Vehicle{
    speed = 50;

    loading(){
        console.log('vehicle -- loading');
    }
}


class Car extends Vehicle{

    speed = 100;
    static rpm = 1200;

    start(){
        console.log('car -- start');
    }

    stop(){
        console.log('car -- stop');
    }

    refuel(){
        console.log('car -- refuel');
    }

    static billing(){
        console.log('car -- billing');
    }

    //override
    loading(){
        console.log('car -- loading');
    }
}

class Cycle{
    testing(){
        console.log('cycle testing');
    }
}



class BMW extends Car{
    speed = 200;

    //override
    start(){
        super.start();
        console.log('BMW -- start');
        console.log(this.speed);
        console.log(super.speed); //undefined -- only applicable to methods
        console.log(Car.rpm);
    }

    //individual
    autoParking(){
        console.log('BMW -- autoParking');
    }

    // static billing(){
    //     console.log('BMW -- billing');
    // }
}

export {Car, BMW};