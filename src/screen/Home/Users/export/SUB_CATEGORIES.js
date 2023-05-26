import furniture from "../assets/sub_cat/carpenter/funiture.png"
import doorrepair from "../assets/sub_cat/carpenter/doorrepair.png"
import DrillAndHang from "../assets/sub_cat/carpenter/DrillAndHang.png"
import wiring from "../assets/sub_cat/electrician/wiring.png"
import circuit from "../assets/sub_cat/electrician/circuit.png"
import Light from "../assets/sub_cat/electrician/Light.png"
import doorBell from "../assets/sub_cat/electrician/doorBell.png"
import toilet from "../assets/sub_cat/plumber/toilet.png"
import drainageAndPipe from "../assets/sub_cat/plumber/drainageAndPipe.png"
import BasinAndSink from "../assets/sub_cat/plumber/BasinAndSink.png"
import bathFitting from "../assets/sub_cat/plumber/bathFitting.png"
import tapAndMixture from "../assets/sub_cat/plumber/tapAndMixture.png"
import houseCleaning from "../assets/sub_cat/cleaning/houseCleaning.png"
import officeCleaining from "../assets/sub_cat/cleaning/officeCleaining.png"
import HaircuttingForMen from "../assets/sub_cat/barber/HaircuttingForMen.png"
import HairdyesForMen from "../assets/sub_cat/barber/HairdyesForMen.png"
import SalonForWomen from "../assets/sub_cat/beauty/SalonForWomen.png"
import HairStudioforWomen from "../assets/sub_cat/beauty/HairStudioforWomen.png"
import waterPurifierRepair from "../assets/sub_cat/technician/waterPurifierRepair.png"
import ACrepair from "../assets/sub_cat/technician/ACrepair.png"
import WashingMachineRepair2 from "../assets/sub_cat/technician/WashingMachineRepair2.png"
import microwaveRepair from "../assets/sub_cat/technician/microwaveRepair.png"
import refrigeratorRepair from "../assets/sub_cat/technician/refrigeratorRepair.png"


export const  SUB_CATEGORIES = {
  carpentery: [
    {
      text: 'furniture repair',
      img: furniture,
    },
    {
      text: 'cabinet making',
      img: doorrepair,
    },
    {
      text: 'woodworking',
      img: '',
    },
    {
      text: 'Drill And Hang',
      img: DrillAndHang,
    }
  ],
  electrician: [
    {
      text: 'wiring installation',
      img: wiring,
    },
    {
      text: 'circuit breaker repair',
      img: circuit,
    },
    {
      text: 'lighting installation',
      img: Light,
    },
    {
      text: 'security system installation',
      img: doorBell,
    }
  ],
  plumbing: [
    {
      text: 'pipe installation',
      img: '',
    },
    {
      text: 'drain cleaning',
      img: drainageAndPipe,
    },
    {
      text: 'Basin And Sink',
      img: BasinAndSink,
    },
    {
      text: 'bath fitting',
      img: bathFitting,
    },
    {
      text: 'toilet repair',
      img: toilet,
    },
    {
      text: 'tap And Mixture',
      img: tapAndMixture,
    },
    {
      text: 'water heater installation',
      img: '',
    }
  ],
  cleaning: [
    {
      text: 'House Cleaning',
      img: houseCleaning,
    },
    {
      text: 'Office Cleaning',
      img: officeCleaining,
    },
    {
      text: 'Galary Cleaning',
      img: '',
    },
    {
      text: 'window cleaning',
      img: '',
    }
  ],
  barber: [
    {
      text: 'Haircut',
      img: HaircuttingForMen,
    },
    {
      text: 'Shaving',
      img: '',
    },
    {
      text: 'Trimming',
      img: '',
    },
    {
      text: 'Hair dyes For Men',
      img: HairdyesForMen,
    },
    {
      text: 'Styling',
      img: '',
    }
  ],
  car_wash: [
    {
      text: 'exterior',
      img: '',
    },
    {
      text: 'interior',
      img: '',
    },
    {
      text: 'Car detailing',
      img: '',
    },
    {
      text: 'Polishing',
      img: '',
    }
  ],
  makeup: [
    {
      text: 'Bridal makeup',
      img: HairStudioforWomen,
    },
    {
      text: 'Special occasion makeup',
      img: SalonForWomen,
    },
    {
      text: 'Photo shoot makeup',
      img: '',
    },
    {
      text: 'Makeup consultation',
      img: '',
    }
  ]
  ,
  beauty:[
    {
      text:"salon for Women",
      img:SalonForWomen,
    },
    {
      text:"hair studio",
      img:HairStudioforWomen
    },
  ],
  technician:[
    {
      text:"RO repair",
      img:waterPurifierRepair,
    },
    {
      text:"Washing Machine",
      img: WashingMachineRepair2,
      
    },
    {
      text:"AC  repair",
      img: ACrepair,
      
    },
    {
      text:"refrigerator repair",
      img: refrigeratorRepair,
      
    },
    {
      text:"microwave repair",
      img: microwaveRepair,
    },
  ]
};
