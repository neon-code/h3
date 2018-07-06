import React from 'react';
import '../CSS/primary.css';
import { Button, Image, Icon, Label, Header, Modal } from 'semantic-ui-react';

var fileDir = {
    1:[
        { fileName: './images/n01530575_188.JPEG', id: "n01530575" },
        { fileName: './images/n01537544_31.JPEG', id: "n01537544" },
        { fileName: './images/n01608432_613.JPEG', id: "n01608432" },
        { fileName: './images/n01622779_182.JPEG', id: "n01622779" },
        { fileName: './images/n01632458_6.JPEG', id: "n01632458" },
        { fileName: './images/n01770393_266.JPEG', id: "n01770393" },
        { fileName: './images/n01774384_90.JPEG', id: "n01774384" },
        { fileName: './images/n01796340_128.JPEG', id: "n01796340" },
        { fileName: './images/n01820546_214.JPEG', id: "n01820546" },
        { fileName: './images/n01910747_200.JPEG', id: "n01910747" },
        { fileName: './images/n02087394_468.JPEG', id: "n02087394" },
        { fileName: './images/n02089078_179.JPEG', id: "n02089078" },
        { fileName: './images/n02090622_16.JPEG', id: "n02090622" },
        { fileName: './images/n02090721_12.JPEG', id: "n02090721" },
        { fileName: './images/n02091467_138.JPEG', id: "n02091467" },
        { fileName: './images/n02110341_132.JPEG', id: "n02110341" },
        { fileName: './images/n02114548_92.JPEG', id: "n02114548" },
        { fileName: './images/n02123045_147.JPEG', id: "n02123045" },
        { fileName: './images/n02123394_89.JPEG', id: "n02123394" },
        { fileName: './images/n02123597_2.JPEG', id: "n02123597" },
        { fileName: './images/n02236044_232.JPEG', id: "n02236044" },
        { fileName: './images/n02277742_57.JPEG', id: "n02277742" },
        { fileName: './images/n02317335_337.JPEG', id: "n02317335" },
        { fileName: './images/n02342885_40.JPEG', id: "n02342885" },
        { fileName: './images/n02526121_97.JPEG', id: "n02526121" },
        { fileName: './images/n02730930_163.JPEG', id: "n02730930" },
        { fileName: './images/n02747177_118.JPEG', id: "n02747177" },
        { fileName: './images/n02791124_14.JPEG', id: "n02791124" },
        { fileName: './images/n02804414_17.JPEG', id: "n02804414" },
        { fileName: './images/n02815834_25.JPEG', id: "n02815834" },
        { fileName: './images/n02978881_124.JPEG', id: "n02978881" },
        { fileName: './images/n03063599_96.JPEG', id: "n03063599" },
        { fileName: './images/n03187595_26.JPEG', id: "n03187595" },
        { fileName: './images/n03197337_92.JPEG', id: "n03197337" },
        { fileName: './images/n03314780_109.JPEG', id: "n03314780" },
        { fileName: './images/n03887697_36.JPEG', id: "n03887697" },
        { fileName: './images/n03888257_18.JPEG', id: "n03888257" },
        { fileName: './images/n03924679_21.JPEG', id: "n03924679" },
        { fileName: './images/n04147183_375.JPEG', id: "n04147183" },
        { fileName: './images/n04266014_81.JPEG', id: "n04266014" },
        { fileName: './images/n07714571_54.JPEG', id: "n07714571" },
        { fileName: './images/n07714990_29.JPEG', id: "n07714990" },
        { fileName: './images/n07716906_173.JPEG', id: "n07716906" },
        { fileName: './images/n07720875_13.JPEG', id: "n07720875" },
        { fileName: './images/n07730033_133.JPEG', id: "n07730033" },
        { fileName: './images/n07802026_3.JPEG', id: "n07802026" },
        { fileName: './images/n07873807_146.JPEG', id: "n07873807" },
        { fileName: './images/n09835506_10.JPEG', id: "n09835506" },
        { fileName: './images/n11939491_563.JPEG', id: "n11939491" },
        { fileName: './images/n13054560_171.JPEG', id: "n13054560" },
    ],

    2:[
        { fileName: './images/n02667093_88.JPEG', id: "8" },
        { fileName: './images/n02672831_40.JPEG', id: "6" },
        { fileName: './images/n02701002_37.JPEG', id: "9" },
        { fileName: './images/n02749479_10.JPEG', id: "3" },
        { fileName: './images/n02783161_8.JPEG', id: "5" },
        { fileName: './images/n02791124_57.JPEG', id: "4" },
        { fileName: './images/n02795169_33.JPEG', id: "2" },
        { fileName: './images/n02797295_114.JPEG', id: "9" },
        { fileName: './images/n02808304_84.JPEG', id: "8" },
        { fileName: './images/n02814860_413.JPEG', id: "0" },
        { fileName: './images/n02883205_169.JPEG', id: "8" },
        { fileName: './images/n02906734_75.JPEG', id: "2" },
        { fileName: './images/n02988304_52.JPEG', id: "1" },
        { fileName: './images/n03000247_545.JPEG', id: "8" },
        { fileName: './images/n03047690_69.JPEG', id: "8" },
        { fileName: './images/n03085013_161.JPEG', id: "1" },
        { fileName: './images/n03095699_107.JPEG', id: "9" },
        { fileName: './images/n03110669_279.JPEG', id: "6" },
        { fileName: './images/n03127925_184.JPEG', id: "2" },
        { fileName: './images/n03141823_186.JPEG', id: "5" },
        { fileName: './images/n03207941_78.JPEG', id: "4" },
        { fileName: './images/n03271574_176.JPEG', id: "3" },
        { fileName: './images/n03417042_108.JPEG', id: "9" },
        { fileName: './images/n03459775_102.JPEG', id: "9" },
        { fileName: './images/n03481172_8.JPEG', id: "5" },
        { fileName: './images/n03482405_199.JPEG', id: "2" },
        { fileName: './images/n03662601_145.JPEG', id: "9" },
        { fileName: './images/n03706229_5.JPEG', id: "3" },
        { fileName: './images/n03792782_52.JPEG', id: "9" },
        { fileName: './images/n03796401_41.JPEG', id: "9" },
        { fileName: './images/n03804744_417.JPEG', id: "5" },
        { fileName: './images/n03814906_143.JPEG', id: "8" },
        { fileName: './images/n03866082_7.JPEG', id: "8" },
        { fileName: './images/n03877845_299.JPEG', id: "0" },
        { fileName: './images/n03930630_41.JPEG', id: "9" },
        { fileName: './images/n03977966_241.JPEG', id: "9" },
        { fileName: './images/n04009552_149.JPEG', id: "1" },
        { fileName: './images/n04067472_43.JPEG', id: "5" },
        { fileName: './images/n04120489_5.JPEG', id: "8" },
        { fileName: './images/n04209133_48.JPEG', id: "8" },
        { fileName: './images/n04254777_207.JPEG', id: "8" },
        { fileName: './images/n04285008_312.JPEG', id: "9" },
        { fileName: './images/n04328186_214.JPEG', id: "3" },
        { fileName: './images/n04371430_54.JPEG', id: "8" },
        { fileName: './images/n04399382_226.JPEG', id: "10" },
        { fileName: './images/n04482393_142.JPEG', id: "9" },
        { fileName: './images/n04483307_102.JPEG', id: "9" },
        { fileName: './images/n04487081_161.JPEG', id: "9" },
        { fileName: './images/n04505470_73.JPEG', id: "3" },
        { fileName: './images/n04536866_208.JPEG', id: "6" },        
    ],

    3:[
        { fileName: './images/n01514668_80.JPEG', id: "n01514668" },
        { fileName: './images/n01514859_122.JPEG', id: "n01514859" },
        { fileName: './images/n01518878_103.JPEG', id: "n01518878" },
        { fileName: './images/n01530575_66.JPEG', id: "n01530575" },
        { fileName: './images/n01531178_431.JPEG', id: "n01531178" },
        { fileName: './images/n01532829_26.JPEG', id: "n01532829" },
        { fileName: './images/n01534433_128.JPEG', id: "n01534433" },
        { fileName: './images/n01537544_103.JPEG', id: "n01537544" },
        { fileName: './images/n01558993_155.JPEG', id: "n01558993" },
        { fileName: './images/n01560419_50.JPEG', id: "n01560419" },
        { fileName: './images/n01580077_133.JPEG', id: "n01580077" },
        { fileName: './images/n01582220_80.JPEG', id: "n01582220" },
        { fileName: './images/n01592084_9.JPEG', id: "n01592084" },
        { fileName: './images/n01601694_42.JPEG', id: "n01601694" },
        { fileName: './images/n01608432_373.JPEG', id: "n01608432" },
        { fileName: './images/n01614925_52.JPEG', id: "n01614925" },
        { fileName: './images/n01616318_312.JPEG', id: "n01616318" },
        { fileName: './images/n01622779_70.JPEG', id: "n01622779" },
        { fileName: './images/n01817953_86.JPEG', id: "n01817953" },
        { fileName: './images/n01818515_244.JPEG', id: "n01818515" },
        { fileName: './images/n01819313_83.JPEG', id: "n01819313" },
        { fileName: './images/n01820546_102.JPEG', id: "n01820546" },
        { fileName: './images/n01824575_202.JPEG', id: "n01824575" },
        { fileName: './images/n01828970_104.JPEG', id: "n01828970" },
        { fileName: './images/n01829413_121.JPEG', id: "n01829413" },
        { fileName: './images/n01833805_80.JPEG', id: "n01833805" },
        { fileName: './images/n01843065_66.JPEG', id: "n01843065" },
        { fileName: './images/n01843383_211.JPEG', id: "n01843383" },
        { fileName: './images/n01847000_573.JPEG', id: "n01847000" },
        { fileName: './images/n01855032_80.JPEG', id: "n01855032" },
        { fileName: './images/n02002556_33.JPEG', id: "n02002556" },
        { fileName: './images/n02002724_125.JPEG', id: "n02002724" },
        { fileName: './images/n02006656_6.JPEG', id: "n02006656" },
        { fileName: './images/n02007558_149.JPEG', id: "n02007558" },
        { fileName: './images/n02009229_44.JPEG', id: "n02009229" },
        { fileName: './images/n02009912_308.JPEG', id: "n02009912" },
        { fileName: './images/n02011460_309.JPEG', id: "n02011460" },
        { fileName: './images/n02012849_26.JPEG', id: "n02012849" },
        { fileName: './images/n02013706_70.JPEG', id: "n02013706" },
        { fileName: './images/n02017213_86.JPEG', id: "n02017213" },
        { fileName: './images/n02018207_286.JPEG', id: "n02018207" },
        { fileName: './images/n02018795_56.JPEG', id: "n02018795" },
        { fileName: './images/n02025239_82.JPEG', id: "n02025239" },
        { fileName: './images/n02027492_135.JPEG', id: "n02027492" },
        { fileName: './images/n02028035_408.JPEG', id: "n02028035" },
        { fileName: './images/n02033041_10.JPEG', id: "n02033041" },
        { fileName: './images/n02037110_231.JPEG', id: "n02037110" },
        { fileName: './images/n02051845_11.JPEG', id: "n02051845" },
        { fileName: './images/n02056570_63.JPEG', id: "n02056570" },
        { fileName: './images/n02058221_398.JPEG', id: "n02058221" },
    ]
}

var activeIndex = Math.floor(Math.random() * 50), usedImages = [activeIndex], taskDone = 1, flag;
var timeTaken = { minutes: 0, seconds: 0, milsec: 0 }, indvTime = [0, 0, 0], addTime = [0, 0, 0], avgTime = [], Interval;
var level = 1, fileName = fileDir[level][activeIndex].fileName, levelFlag = [ true, true ];
const LevelLimit = [50, 100, 150];

export class MainImages extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isopen: false,
            activeNext: false,
            buttonText: "Next Image"
        };
    }

    componentDidMount() {
        //The componentDidMount() is a React method which is triggered when the app starts.
        alert("* Please disable AdBlock and any other antivirus software before you begin!\n Make sure to \"Allow\" popups/cookies on this app! *");

        this.props.onRef(this);
        this.props.setCards(level);
    }

    updateButton() {
        //A simple condition statement to enable/disable the NEXT button
        this.state.activeNext ? this.setState({ activeNext: false }) : this.setState({ activeNext: true })
    }

    OnFinish(x) {
        if ( x === 1 ) {
            //To find the Average total time
            let td = taskDone - 1;
            avgTime[0] = addTime[0] / td;
            avgTime[1] = addTime[1] / td;
            avgTime[2] = addTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            //this onFinish is in App.js as an html prop in <MainImages>
            this.props.onFinish(addTime, avgTime);
        }
        else {
            //To find the Average indv time
            let td = LevelLimit[0] ;
            avgTime[0] = indvTime[0] / td;
            avgTime[1] = indvTime[1] / td;
            avgTime[2] = indvTime[2] / td;

            avgTime[1] += (avgTime[0] * 60) % 60;
            avgTime[2] += (avgTime[1] * 100) % 100;

            avgTime[0] = Math.floor(avgTime[0]);
            avgTime[1] = Math.floor(avgTime[1]);
            avgTime[2] = Math.floor(avgTime[2]);

            this.props.apndtime(indvTime, avgTime);
        }
    }

    startTimer() {
        timeTaken.milsec++;

        if (timeTaken.milsec > 99) {
            timeTaken.seconds++;
            timeTaken.milsec = 0;
        }

        if (timeTaken.seconds > 59) {
            timeTaken.minutes++;
            timeTaken.seconds = 0;
        }
    }

    startWatch() {
        Interval = setInterval(this.startTimer, 10);
    }

    changeImage() {
        //Pause the StopWatch
        clearInterval(Interval);
        this.updateButton();

        //To pass values to Parent (App.js);
        let t = timeTaken.minutes + ":" + timeTaken.seconds + ":" + timeTaken.milsec;

        if( level === 2 || level === 3 ) 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, fileDir[level][activeIndex].id, t);
        else 
            this.props.onNextImage(fileDir[level][activeIndex].fileName, parseInt(fileDir[level][activeIndex].id.slice(1), 10), t);
        
        //Add the time to find total time take
        addTime[2] += timeTaken.milsec;
        if (addTime[2] > 99) {
            addTime[1] += Math.floor(addTime[2] / 100);
            addTime[2] %= 100;
        }
        addTime[1] += timeTaken.seconds;
        if (addTime[1] > 59) {
            addTime[0] += Math.floor(addTime[1] / 60);
            addTime[1] %= 60;
        }
        addTime[0] += timeTaken.minutes;

        //For individual Level time
        indvTime[2] += timeTaken.milsec;
        if (indvTime[2] > 99) {
            indvTime[1] += Math.floor(indvTime[2] / 100);
            indvTime[2] %= 100;
        }
        indvTime[1] += timeTaken.seconds;
        if (indvTime[1] > 59) {
            indvTime[0] += Math.floor(indvTime[1] / 60);
            indvTime[1] %= 60;
        }
        indvTime[0] += timeTaken.minutes;
        
        //Clear the StopWatch
        timeTaken.milsec = timeTaken.seconds = timeTaken.minutes = 0;

        //Load next image
        taskDone++;
        //Change of Level happens here
        if (taskDone > LevelLimit[0] && taskDone < LevelLimit[1] && levelFlag[0] === true) {

            //to indicate a Level has finished labeling
            this.OnFinish(0);

            //sets the heirarchy level
            level = 2;

            //To flush out the indices and store new values
            usedImages = usedImages.slice(0, 0);

            //Reset indv Timer
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //to prevent re-entering this if statement
            levelFlag[0] = false;
        }
        else
        if (taskDone > LevelLimit[1] && taskDone < LevelLimit[2] && levelFlag[1] === true) {
            this.OnFinish(0);
            level =3;
            usedImages = usedImages.slice(0, 0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;
            levelFlag[1] = false;
        }
        else
        if( taskDone === LevelLimit[2] )
            this.setState({ buttonText: "Finish!" })
        
        if (taskDone > LevelLimit[2] ) {
            this.OnFinish(0);
            indvTime[0] = indvTime[1] = indvTime[2] = 0;

            //indicated that the task has finished
            this.setState({
                isopen: true
            })
        }
        else {
            //Here we check if a randomly selected image has been selected before or not
            do {
                flag = true;
                activeIndex = Math.floor(Math.random() * 50);

                //We store the array index of FileDir in an array and use it compare
                for (var i = 0; i < usedImages.length; i++)
                    if (usedImages[i] === activeIndex)
                        flag = false;

                //only if a new, unique value is selected, it will display
                if (flag === true) {
                    usedImages.push(activeIndex);
                    fileName= fileDir[level][activeIndex].fileName;
                }
            } while (flag !== true);
        }

        this.props.setCards(level);

        //Start the Watch
        this.startWatch();
    }

    render() {
        return (
            <div>
                <Image className="imageStyling" src={fileName} />

                <Label style={{ zIndex: "1", position: "fixed", top: "10px", right: '4vw' }} color="teal">
                    {taskDone}/150
                </Label>

                <div className="NextButton" style={{ width: '180px' }} >
                    {this.state.activeNext ?
                        <Button primary animated size='huge' onClick={this.changeImage.bind(this)}>
                            <Button.Content visible> {this.state.buttonText} </Button.Content>
                            <Button.Content hidden>
                                <Icon name='right arrow' />
                            </Button.Content>
                        </Button>
                        :
                        <Button disabled size='huge'>{this.state.buttonText}</Button>
                    }
                </div>

                <Modal open={this.state.isopen} basic dimmer="blurring" style={{ position: "fixed", width: "auto", marginTop: "30vh", marginLeft: "38vw" }}>
                    <Header icon='check square outline' style={{ textAlign: "center" }} content='Task Completed!' />
                    <Modal.Content>
                        <h2> Thank you for your participation! <br />
                            Please download the result. </h2>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='blue' inverted onClick={this.OnFinish.bind(this, 1)}>
                            <Icon name='download icon' /> Download Result
                        </Button>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}