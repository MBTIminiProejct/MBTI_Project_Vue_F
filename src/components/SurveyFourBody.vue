<template>
    <body>
        <div class="box1" id = "boxj" style="font-family:verdana; text-align: center">
   <label for="jfile">J</label>
   <progress id="jfile" max="100" :value="jfileValue"></progress>
</div>
   <div class="box2" id = "boxp" style="font-family:verdana; text-align: center">
   <label for="pfile">P</label>
   <progress id="pfile" max="100" :value="pfileValue"></progress>
</div>
    <br>
     <div class="box3" style="font-family:verdana; text-align: center">
     <h3>1. 일이 잘못될 때를 대비해 여러 대비책을 세우는 편이다.</h3>
     <input type="radio" name="myRadio1" v-model="myRadio1" value="0" @change="handleChange1" @mouseup="updateOldNum1">매우 아니다 
     <input type="radio" name="myRadio1" v-model="myRadio1" value="1" @change="handleChange1" @mouseup="updateOldNum1">아니다
     <input type="radio" name="myRadio1" v-model="myRadio1" value="2" @change="handleChange1" @mouseup="updateOldNum1">그렇다
     <input type="radio" name="myRadio1" v-model="myRadio1" value="3" @change="handleChange1" @mouseup="updateOldNum1">매우 그렇다
     <input type="radio" id="radio-previous1" name="myRadio1" v-model="myRadio1" value="-100" @change="handleChange1" @mouseup="updateOldNum1">
     </div>
     <br>
     <div class="box4" style="font-family:verdana; text-align: center">
     <h3>2. 단계를 건너뛰는 일 없이 절차대로 일을 완수하는 편이다.</h3>
     <input type="radio" name="myRadio2" v-model="myRadio2" value="0" @change="handleChange2" @mouseup="updateOldNum2">매우 아니다 
     <input type="radio" name="myRadio2" v-model="myRadio2" value="1" @change="handleChange2" @mouseup="updateOldNum2">아니다
     <input type="radio" name="myRadio2" v-model="myRadio2" value="2" @change="handleChange2" @mouseup="updateOldNum2">그렇다
     <input type="radio" name="myRadio2" v-model="myRadio2" value="3" @change="handleChange2" @mouseup="updateOldNum2">매우 그렇다
     <input type="radio" id="radio-previous2" name="myRadio2" v-model="myRadio2" value="-100" @change="handleChange2" @mouseup="updateOldNum2">
     </div>
     <br>
     <div class="box5" style="font-family:verdana; text-align: center">
     <h3>3. 일이 잘못될까봐 자주 걱정하는 편이다.</h3>
     <input type="radio" name="myRadio3" v-model="myRadio3" value="0" @change="handleChange3" @mouseup="updateOldNum3">매우 아니다 
     <input type="radio" name="myRadio3" v-model="myRadio3" value="1" @change="handleChange3" @mouseup="updateOldNum3">아니다
     <input type="radio" name="myRadio3" v-model="myRadio3" value="2" @change="handleChange3" @mouseup="updateOldNum3">그렇다
     <input type="radio" name="myRadio3" v-model="myRadio3" value="3" @change="handleChange3" @mouseup="updateOldNum3">매우 그렇다
     <input type="radio" id="radio-previous3" name="myRadio3" v-model="myRadio3" value="-100" @change="handleChange3" @mouseup="updateOldNum3">
     </div>
     <br>
     <div class="box6" style="font-family:verdana; text-align: center">
     <h3>4. 해야 할 일을 마지막까지 미룰 때가 많다.</h3>
     <input type="radio" name="myRadio4" v-model="myRadio4" value="3" @change="handleChange4" @mouseup="updateOldNum4">매우 아니다 
     <input type="radio" name="myRadio4" v-model="myRadio4" value="2" @change="handleChange4" @mouseup="updateOldNum4">아니다
     <input type="radio" name="myRadio4" v-model="myRadio4" value="1" @change="handleChange4" @mouseup="updateOldNum4">그렇다
     <input type="radio" name="myRadio4" v-model="myRadio4" value="0" @change="handleChange4" @mouseup="updateOldNum4">매우 그렇다
     <input type="radio" id="radio-previous4" name="myRadio4" v-model="myRadio4" value="-100" @change="handleChange4" @mouseup="updateOldNum4">
     </div>
     <br>
     <div class="box7" style="font-family:verdana; text-align: center">
     <h3>5. 휴식을 취하기 전에 집안일을 먼저 끝내기를 원한다.</h3>
     <input type="radio" name="myRadio5" v-model="myRadio5" value="0" @change="handleChange5" @mouseup="updateOldNum5">매우 아니다 
     <input type="radio" name="myRadio5" v-model="myRadio5" value="1" @change="handleChange5" @mouseup="updateOldNum5">아니다
     <input type="radio" name="myRadio5" v-model="myRadio5" value="2" @change="handleChange5" @mouseup="updateOldNum5">그렇다
     <input type="radio" name="myRadio5" v-model="myRadio5" value="3" @change="handleChange5" @mouseup="updateOldNum5">매우 그렇다
     <input type="radio" id="radio-previous5" name="myRadio5" v-model="myRadio5" value="-100" @change="handleChange5" @mouseup="updateOldNum5">
     </div>
     
     <div class="box8" style="font-family:verdana; text-align: center">
     <!--<form action="/springmbti/survey/surveytwo" method="post">-->
        <router-link to="/survey/partthree"><button class="btn-primary" id="back4" >뒤로가기</button></router-link>
       <router-link to="/result"><button class="btn-primary" id="next4" @click="sbuttonfour" >제출</button></router-link>
         <!--<button id="next1" type="submit" @click="sbuttonone">제출</button>-->
     </div>   
     
 </body>
 
 </template>
 
 <script>
 import axios from 'axios'
 

 export default {
   data() {
     return {
       myRadio1: "-100",
       myRadio2: "-100",
       myRadio3: "-100",
       myRadio4: "-100",
       myRadio5: "-100",
       oldnum1: "",
       oldnum2: "",
       oldnum3: "",
       oldnum4: "",
       oldnum5: "",
       changenum1: "",
       changenum2: "",
       changenum3: "",
       changenum4: "",
       changenum5: "",
       jfileValue: 0,
       pfileValue: 0
     };
   },
   created() {
   const myRadio1 = sessionStorage.getItem('myRadiojp1');
    if (myRadio1 !== null) {
        this.myRadio1 = myRadio1;
        this.changenum1 = this.myRadio1;
    }

    const myRadio2 = sessionStorage.getItem('myRadiojp2');
    if (myRadio2 !== null) {
        this.myRadio2 = myRadio2;
        this.changenum2 = this.myRadio2;
    }

    const myRadio3 = sessionStorage.getItem('myRadiojp3');
    if (myRadio3 !== null) {
        this.myRadio3 = myRadio3;
        this.changenum3 = this.myRadio3;
    }

    const myRadio4 = sessionStorage.getItem('myRadiojp4');
    if (myRadio4 !== null) {
        this.myRadio4 = myRadio4;
        this.changenum4 = this.myRadio4;
    }
    const myRadio5 = sessionStorage.getItem('myRadiojp5');
    if (myRadio5 !== null) {
        this.myRadio5 = myRadio5;
        this.changenum5 = this.myRadio5;
    }
    const jfileValue = sessionStorage.getItem('jfileValue');
    if (jfileValue !== null) {
        this.jfileValue = jfileValue;
    }

    const pfileValue = sessionStorage.getItem('pfileValue');
    if (pfileValue !== null) {
        this.pfileValue = pfileValue;
    }
    
  },
  mounted() {
   let rtotal = 0;
    for (let i = 1; i <= 5; i++) {
   let radioId = "#radio-previous" + i;
   if ($(radioId).prop('checked')) {
      rtotal += Number(0);
   } else {
      rtotal += Number(1);
   }
   }
   if (rtotal == 5) {
   $('#next4').show();
   } 
  },
   methods: {
     handleChange1() {
       this.changenum1 = this.myRadio1;
       this.sendData1()
     },
     updateOldNum1() {
       this.oldnum1 = $('input[name=myRadio1]:checked').val();
       
     },
     handleChange2() {
       this.changenum2 = this.myRadio2;
       this.sendData2()
     },
     updateOldNum2() {
       this.oldnum2 = $('input[name=myRadio2]:checked').val();
       
     },
     handleChange3() {
       this.changenum3 = this.myRadio3;
       this.sendData3()
     },
     updateOldNum3() {
       this.oldnum3 = $('input[name=myRadio3]:checked').val();
       
     },
     handleChange4() {
       this.changenum4 = this.myRadio4;
       this.sendData4()
     },
     updateOldNum4() {
       this.oldnum4 = $('input[name=myRadio4]:checked').val();
       
     },
     handleChange5() {
       this.changenum5 = this.myRadio5;
       this.sendData5()
     },
     updateOldNum5() {
       this.oldnum5 = $('input[name=myRadio5]:checked').val();
       
     },
     sendData1() {   
       console.log("제발1")
       let cmpone = this;
    axios.get(this._baseUrl + 'survey/partfour/surveyfour', {
       params: { 
          onum: this.oldnum1,
          cnum: this.changenum1
       }
    })
    .then(function (response) {
       var data = response.data;
       var values = Object.values(data);
       if (data['onum'] == 3) {
         console.log('onum3');
         cmpone.jfileValue -= 20;
      } else if (data['onum'] == 2) {
         console.log('onum2');
         cmpone.jfileValue -= 13;
         cmpone.pfileValue -= 7;
      } else if (data['onum'] == 1) {
         console.log('onum1');
         cmpone.jfileValue -= 7;
         cmpone.pfileValue -= 13;
      } else if (data['onum'] == 0) {
         console.log('onum0');
         cmpone.pfileValue -= 20;
      } else {
         console.log('onum-1');
      }

      if(data['cnum']==3) {
            cmpone.jfileValue += 20;
         } else if(data['cnum']==2) {
            cmpone.jfileValue += 13;
            cmpone.pfileValue += 7;
         } else if(data['cnum']==1) {
            cmpone.jfileValue += 7;
            cmpone.pfileValue += 13;
         } else if(data['cnum']==0) {
            cmpone.pfileValue += 20;
      } else {
         console.log('-1');
      }   
         var rtotal = 0;
 
     for (var i = 1; i <= 5; i++) {
     var radioId = "#radio-previous" + i;
     if ($(radioId).prop('checked')) {
         rtotal += Number(0);
     } else {
         rtotal += Number(1);
     }
     }
 
     if (rtotal == 5) {
     $('#next4').show();
     }
             
    })
    .catch(function (error) {
       console.log(error);
    })
   },
   sendData2() {   
       console.log("제발2")
       let cmptwo = this;
    axios.get(this._baseUrl + 'survey/partfour/surveyfour', {
       params: { 
          onum: this.oldnum2,
          cnum: this.changenum2
       }
    })
    .then(function (response) {
       var data = response.data;
       var values = Object.values(data);
       if (data['onum'] == 3) {
         console.log('onum3');
         cmptwo.jfileValue -= 20;
      } else if (data['onum'] == 2) {
         console.log('onum2');
         cmptwo.jfileValue -= 13;
         cmptwo.pfileValue -= 7;
      } else if (data['onum'] == 1) {
         console.log('onum1');
         cmptwo.jfileValue -= 7;
         cmptwo.pfileValue -= 13;
      } else if (data['onum'] == 0) {
         console.log('onum0');
         cmptwo.pfileValue -= 20;
      } else {
         console.log('onum-1');
      }

      if(data['cnum']==3) {
            cmptwo.jfileValue += 20;
         } else if(data['cnum']==2) {
            cmptwo.jfileValue += 13;
            cmptwo.pfileValue += 7;
         } else if(data['cnum']==1) {
            cmptwo.jfileValue += 7;
            cmptwo.pfileValue += 13;
         } else if(data['cnum']==0) {
            cmptwo.pfileValue += 20;
      } else {
         console.log('-1');
      }
         var rtotal = 0;
 
     for (var i = 1; i <= 5; i++) {
     var radioId = "#radio-previous" + i;
     if ($(radioId).prop('checked')) {
         rtotal += Number(0);
     } else {
         rtotal += Number(1);
     }
     }
 
     if (rtotal == 5) {
     $('#next4').show();
     }
             
    })
    .catch(function (error) {
       console.log(error);
    })
   },
   sendData3() {   
       console.log("제발3")
       let cmpthree = this;
    axios.get(this._baseUrl + 'survey/partfour/surveyfour', {
       params: { 
          onum: this.oldnum3,
          cnum: this.changenum3
       }
    })
    .then(function (response) {
       var data = response.data;
       var values = Object.values(data);
       if (data['onum'] == 3) {
         console.log('onum3');
         cmpthree.jfileValue -= 20;
      } else if (data['onum'] == 2) {
         console.log('onum2');
         cmpthree.jfileValue -= 13;
         cmpthree.pfileValue -= 7;
      } else if (data['onum'] == 1) {
         console.log('onum1');
         cmpthree.jfileValue -= 7;
         cmpthree.pfileValue -= 13;
      } else if (data['onum'] == 0) {
         console.log('onum0');
         cmpthree.pfileValue -= 20;
      } else {
         console.log('onum-1');
      }

      if(data['cnum']==3) {
            cmpthree.jfileValue += 20;
         } else if(data['cnum']==2) {
            cmpthree.jfileValue += 13;
            cmpthree.pfileValue += 7;
         } else if(data['cnum']==1) {
            cmpthree.jfileValue += 7;
            cmpthree.pfileValue += 13;
         } else if(data['cnum']==0) {
            cmpthree.pfileValue += 20;
      } else {
         console.log('-1');
      }   
         var rtotal = 0;
 
     for (var i = 1; i <= 5; i++) {
     var radioId = "#radio-previous" + i;
     if ($(radioId).prop('checked')) {
         rtotal += Number(0);
     } else {
         rtotal += Number(1);
     }
     }
 
     if (rtotal == 5) {
     $('#next4').show();
     }
             
    })
    .catch(function (error) {
       console.log(error);
    })
   },
   sendData4() {   
       console.log("제발4")
       let cmpfour = this;
    axios.get(this._baseUrl + 'survey/partfour/surveyfour', {
       params: { 
          onum: this.oldnum4,
          cnum: this.changenum4
       }
    })
    .then(function (response) {
       var data = response.data;
       var values = Object.values(data);
       if (data['onum'] == 3) {
         console.log('onum3');
         cmpfour.jfileValue -= 20;
      } else if (data['onum'] == 2) {
         console.log('onum2');
         cmpfour.jfileValue -= 13;
         cmpfour.pfileValue -= 7;
      } else if (data['onum'] == 1) {
         console.log('onum1');
         cmpfour.jfileValue -= 7;
         cmpfour.pfileValue -= 13;
      } else if (data['onum'] == 0) {
         console.log('onum0');
         cmpfour.pfileValue -= 20;
      } else {
         console.log('onum-1');
      }

      if(data['cnum']==3) {
            cmpfour.jfileValue += 20;
         } else if(data['cnum']==2) {
            cmpfour.jfileValue += 13;
            cmpfour.pfileValue += 7;
         } else if(data['cnum']==1) {
            cmpfour.jfileValue += 7;
            cmpfour.pfileValue += 13;
         } else if(data['cnum']==0) {
            cmpfour.pfileValue += 20;
      } else {
         console.log('-1');
      }   
         var rtotal = 0;
 
     for (var i = 1; i <= 5; i++) {
     var radioId = "#radio-previous" + i;
     if ($(radioId).prop('checked')) {
         rtotal += Number(0);
     } else {
         rtotal += Number(1);
     }
     }
 
 if (rtotal == 5) {
   $('#next4').show();
 }
             
    })
    .catch(function (error) {
       console.log(error);
    })
   },
   sendData5() {   
       console.log("제발5")
       let cmpfive = this;
    axios.get(this._baseUrl + 'survey/partfour/surveyfour', {
       params: { 
          onum: this.oldnum5,
          cnum: this.changenum5
       }
    })
    .then(function (response) {
       var data = response.data;
       var values = Object.values(data);
       if (data['onum'] == 3) {
         console.log('onum3');
         cmpfive.jfileValue -= 20;
      } else if (data['onum'] == 2) {
         console.log('onum2');
         cmpfive.jfileValue -= 13;
         cmpfive.pfileValue -= 7;
      } else if (data['onum'] == 1) {
         console.log('onum1');
         cmpfive.jfileValue -= 7;
         cmpfive.pfileValue -= 13;
      } else if (data['onum'] == 0) {
         console.log('onum0');
         cmpfive.pfileValue -= 20;
      } else {
         console.log('onum-1');
      }

      if(data['cnum']==3) {
            cmpfive.jfileValue += 20;
         } else if(data['cnum']==2) {
            cmpfive.jfileValue += 13;
            cmpfive.pfileValue += 7;
         } else if(data['cnum']==1) {
            cmpfive.jfileValue += 7;
            cmpfive.pfileValue += 13;
         } else if(data['cnum']==0) {
            cmpfive.pfileValue += 20;
      } else {
         console.log('-1');
      }   
         var rtotal = 0;
 
     for (var i = 1; i <= 5; i++) {
     var radioId = "#radio-previous" + i;
     if ($(radioId).prop('checked')) {
         rtotal += Number(0);
     } else {
         rtotal += Number(1);
     }
     }
 
     if (rtotal == 5) {
     $('#next4').show();
     }
             
    })
    .catch(function (error) {
       console.log(error);
    })
   },
   sbuttonfour() {
    console.log("제출4") 
    sessionStorage.removeItem("myRadioei1");
    sessionStorage.removeItem("myRadioei2");
    sessionStorage.removeItem("myRadioei3");
    sessionStorage.removeItem("myRadioei4");
    sessionStorage.removeItem("myRadioei5");
    sessionStorage.removeItem("myRadiosn1");
    sessionStorage.removeItem("myRadiosn2");
    sessionStorage.removeItem("myRadiosn3");
    sessionStorage.removeItem("myRadiosn4");
    sessionStorage.removeItem("myRadiosn5");
    sessionStorage.removeItem("myRadioft1");
    sessionStorage.removeItem("myRadioft2");
    sessionStorage.removeItem("myRadioft3");
    sessionStorage.removeItem("myRadioft4");
    sessionStorage.removeItem("myRadioft5");
    sessionStorage.removeItem("efileValue");
    sessionStorage.removeItem("ifileValue");
    sessionStorage.removeItem("sfileValue");
    sessionStorage.removeItem("nfileValue");
    sessionStorage.removeItem("ffileValue");
    sessionStorage.removeItem("tfileValue");
       let cmp = this;
    axios.get(this._baseUrl + 'survey/partfour/sbuttonfour', {
       params: { 
              qone: this.changenum1,
                  qtwo: this.changenum2,
                  qthree: this.changenum3,
                  qfour: this.changenum4,
                  qfive: this.changenum5,
                  speed: cmp.$store.getters.getUserSpeed,
                  email: cmp.$store.getters.getUserEmail

       }
    })
    .then(function (response) {
       var data = response.data;
       
       cmp.$store.commit("setCharacterInfo",JSON.parse(response.data.characterInfo));
      cmp.$store.commit("setUserInfo",JSON.parse(response.data.userInfo));

      axios.get('http://192.168.0.195:8085/springmbti/survey/partfour/sbuttonfour/user', {
        params: {
            qone: 1,
            mbti: cmp.$store.getters.getUserMbti
        }
      })
      .then(function (response) {
      cmp.$store.commit("setMBTIResult",JSON.parse(response.data.mbtiInfo));
        
    }).catch(function (error) {
       console.log(error);
   
    })  
 
   }).catch(function (error) {
    console.log(error);
    console.log("에러가 발생함");
   })
   }}}
 
 
 
 </script>  
 
 <style scoped>
 body {
        font-family: 'Arial', sans-serif;
        margin: 0;
    }
    
    label {
        font-size: 24px;
        font-weight: bold;
        color: #555;
    }
    progress {
        width: 80%;
        height: 24px;
        margin-top: 10px;
        margin-bottom: 20px;
        border: none;
        border-radius: 10px;
        background-color: #ddd;
        appearance: none;
    }
    progress::-webkit-progress-value {
        border-radius: 10px;
        background-color: #555;
    }
    progress::-webkit-progress-bar {
        border-radius: 10px;
        background-color: #ddd;
    }
    .box1, .box2 {
        margin: 0 auto;
        width: 80%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
    }
    .box1:hover, .box2:hover {
        border-color: #555;
    }
    .box3, .box4, .box5, .box6, .box7 {
        margin: 0 auto;
        width: 80%;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #fff;
    }
    .box3:hover, .box4:hover, .box5:hover, .box6:hover, .box7:hover {
        border-color: #555;
    }
    input[type=radio] {
        margin-right: 10px;
        appearance: none;
        border: 2px solid #ddd;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        outline: none;
        vertical-align: middle;
        transition: all 0.2s ease-in-out;
    }
    input[type=radio]:checked {
        border-color: #555;
        background-color: #555;
    }
    input[type=radio]:hover:not(:checked) {
        border-color: #aaa;
    }
    input[type=radio]:focus {
        box-shadow: 0 0 0 2px #ddd;
    }
    input[type=radio]:active {
        box-shadow: 0 0 0 2px #555;
    }
 
 #radio-previous1{
 opacity:0;} 
 
 #radio-previous2{
 opacity:0;}
 
 #radio-previous3{
 opacity:0;}
 
 #radio-previous4{
 opacity:0;}
 
 #radio-previous5{
 opacity:0;}
 
 #next4{
 display:none;}

 .btn-primary {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 12px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.2s;
}
 </style>