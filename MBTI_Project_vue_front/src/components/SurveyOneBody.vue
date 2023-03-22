<template>
   <body>
   <div class="box1" id = "boxe" style="font-family:verdana; text-align: center">
   <label for="efile">E</label>
   <progress id="efile" max="100" value="0"></progress>
</div>
	<div class="box2" id = "boxi" style="font-family:verdana; text-align: center">
   <label for="ifile">I</label>
   <progress id="ifile" max="100" value="0"></progress>
</div>
   <br>
	<div class="box3" style="font-family:verdana; text-align: center">
	<h3>1. 친구에게 먼저 만나자고 연락하는 편이다.</h3>
	<input type="radio" name="myRadio1" v-model="myRadio1" value="0" @change="handleChange1" @mouseup="updateOldNum1">매우 아니다 
	<input type="radio" name="myRadio1" v-model="myRadio1" value="1" @change="handleChange1" @mouseup="updateOldNum1">아니다
	<input type="radio" name="myRadio1" v-model="myRadio1" value="2" @change="handleChange1" @mouseup="updateOldNum1">그렇다
	<input type="radio" name="myRadio1" v-model="myRadio1" value="3" @change="handleChange1" @mouseup="updateOldNum1">매우 그렇다
	<input type="radio" id="radio-previous1" name="myRadio1" v-model="myRadio1" value="-100" @change="handleChange1" @mouseup="updateOldNum1">
	</div>
	<br>
	<div class="box4" style="font-family:verdana; text-align: center">
	<h3>2. 대부분의 시간을 혼자서 일할 수 있는 직업을 원한다.</h3>
	<input type="radio" name="myRadio2" v-model="myRadio2" value="3" @change="handleChange2" @mouseup="updateOldNum2">매우 아니다 
	<input type="radio" name="myRadio2" v-model="myRadio2" value="2" @change="handleChange2" @mouseup="updateOldNum2">아니다
	<input type="radio" name="myRadio2" v-model="myRadio2" value="1" @change="handleChange2" @mouseup="updateOldNum2">그렇다
	<input type="radio" name="myRadio2" v-model="myRadio2" value="0" @change="handleChange2" @mouseup="updateOldNum2">매우 그렇다
	<input type="radio" id="radio-previous2" name="myRadio2" v-model="myRadio2" value="-100" @change="handleChange2" @mouseup="updateOldNum2">
	</div>
	<br>
	<div class="box5" style="font-family:verdana; text-align: center">
	<h3>3. 관심이 가는 사람에게 다가가서 대화를 시작하기가 어렵지 않다.</h3>
	<input type="radio" name="myRadio3" v-model="myRadio3" value="0" @change="handleChange3" @mouseup="updateOldNum3">매우 아니다 
	<input type="radio" name="myRadio3" v-model="myRadio3" value="1" @change="handleChange3" @mouseup="updateOldNum3">아니다
	<input type="radio" name="myRadio3" v-model="myRadio3" value="2" @change="handleChange3" @mouseup="updateOldNum3">그렇다
	<input type="radio" name="myRadio3" v-model="myRadio3" value="3" @change="handleChange3" @mouseup="updateOldNum3">매우 그렇다
	<input type="radio" id="radio-previous3" name="myRadio3" v-model="myRadio3" value="-100" @change="handleChange3" @mouseup="updateOldNum3">
	</div>
	<br>
	<div class="box6" style="font-family:verdana; text-align: center">
	<h3>4. 단체 활동에 참여하는 일을 즐긴다.</h3>
	<input type="radio" name="myRadio4" v-model="myRadio4" value="0" @change="handleChange4" @mouseup="updateOldNum4">매우 아니다 
	<input type="radio" name="myRadio4" v-model="myRadio4" value="1" @change="handleChange4" @mouseup="updateOldNum4">아니다
	<input type="radio" name="myRadio4" v-model="myRadio4" value="2" @change="handleChange4" @mouseup="updateOldNum4">그렇다
	<input type="radio" name="myRadio4" v-model="myRadio4" value="3" @change="handleChange4" @mouseup="updateOldNum4">매우 그렇다
	<input type="radio" id="radio-previous4" name="myRadio4" v-model="myRadio4" value="-100" @change="handleChange4" @mouseup="updateOldNum4">
	</div>
	<br>
	<div class="box7" style="font-family:verdana; text-align: center">
	<h3>5. 혼자보다는 다른 사람과 시간을 보내고 싶어한다.</h3>
	<input type="radio" name="myRadio5" v-model="myRadio5" value="0" @change="handleChange5" @mouseup="updateOldNum5">매우 아니다 
	<input type="radio" name="myRadio5" v-model="myRadio5" value="1" @change="handleChange5" @mouseup="updateOldNum5">아니다
	<input type="radio" name="myRadio5" v-model="myRadio5" value="2" @change="handleChange5" @mouseup="updateOldNum5">그렇다
	<input type="radio" name="myRadio5" v-model="myRadio5" value="3" @change="handleChange5" @mouseup="updateOldNum5">매우 그렇다
	<input type="radio" id="radio-previous5" name="myRadio5" v-model="myRadio5" value="-100" @change="handleChange5" @mouseup="updateOldNum5">
	</div>
	
	<div class="box8" style="font-family:verdana; text-align: center">
	<!--<form action="/springmbti/survey/surveytwo" method="post">-->
      <router-link to="/survey/parttwo"><button id="next1" @click="sbuttonone()" >제출</button></router-link>
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
	  changenum5: ""
    };
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
      
   axios.get(this._baseUrl + 'survey/partone/surveyone', {
      params: { 
         onum: this.oldnum1,
         cnum: this.changenum1
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);
      var eoldValue = Number($('#efile').attr("value"));
	  var ioldValue = Number($('#ifile').attr("value"));
      
      if (data['onum'] == 3) {
         console.log('onum3');
         var eold = eoldValue - 20;
         $('#efile').attr("value",eold);
      } else if (data['onum'] == 2) {
         console.log('onum2');
         var eold = eoldValue - 13;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 7;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 1) {
         console.log('onum1');
         var eold = eoldValue - 7;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 13;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 0) {
         console.log('onum0');
         var iold = ioldValue - 20;
         $('#ifile').attr("value",iold);
      } else {
         console.log('onum-1');
      }

      var eold = Number($('#efile').attr("value"));
	  var iold = Number($('#ifile').attr("value"));

      if(data['cnum']==3) {
				var number = eold + 20;
				$('#efile').attr("value",number);
			} else if(data['cnum']==2) {
				var number = eold + 13;
				$('#efile').attr("value",number);
				var number = iold + 7;
				$('#ifile').attr("value",number);
			} else if(data['cnum']==1) {
				var number = eold + 7;
				$('#efile').attr("value",number);
				var number = iold + 13;
				$('#ifile').attr("value",number);
		
			} else if(data['cnum']==0) {
				var number = iold + 20;
				$('#ifile').attr("value",number);
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
	$('#next1').show();
	}
			
   })
   .catch(function (error) {
      console.log(error);
   })
  },
  sendData2() {   
      console.log("제발2")
      
   axios.get(this._baseUrl + 'survey/partone/surveyone', {
      params: { 
         onum: this.oldnum2,
         cnum: this.changenum2
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);
      var eoldValue = Number($('#efile').attr("value"));
	  var ioldValue = Number($('#ifile').attr("value"));
      
      if (data['onum'] == 3) {
         console.log('onum3');
         var eold = eoldValue - 20;
         $('#efile').attr("value",eold);
      } else if (data['onum'] == 2) {
         console.log('onum2');
         var eold = eoldValue - 13;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 7;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 1) {
         console.log('onum1');
         var eold = eoldValue - 7;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 13;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 0) {
         console.log('onum0');
         var iold = ioldValue - 20;
         $('#ifile').attr("value",iold);
      } else {
         console.log('onum-1');
      }

      var eold = Number($('#efile').attr("value"));
	  var iold = Number($('#ifile').attr("value"));

      if(data['cnum']==3) {
				var number = eold + 20;
				$('#efile').attr("value",number);
			} else if(data['cnum']==2) {
				var number = eold + 13;
				$('#efile').attr("value",number);
				var number = iold + 7;
				$('#ifile').attr("value",number);
			} else if(data['cnum']==1) {
				var number = eold + 7;
				$('#efile').attr("value",number);
				var number = iold + 13;
				$('#ifile').attr("value",number);
		
			} else if(data['cnum']==0) {
				var number = iold + 20;
				$('#ifile').attr("value",number);
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
	$('#next1').show();
	}
			
   })
   .catch(function (error) {
      console.log(error);
   })
  },
  sendData3() {   
      console.log("제발3")
      
   axios.get(this._baseUrl + 'survey/partone/surveyone', {
      params: { 
         onum: this.oldnum3,
         cnum: this.changenum3
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);
      var eoldValue = Number($('#efile').attr("value"));
	  var ioldValue = Number($('#ifile').attr("value"));
      
      if (data['onum'] == 3) {
         console.log('onum3');
         var eold = eoldValue - 20;
         $('#efile').attr("value",eold);
      } else if (data['onum'] == 2) {
         console.log('onum2');
         var eold = eoldValue - 13;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 7;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 1) {
         console.log('onum1');
         var eold = eoldValue - 7;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 13;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 0) {
         console.log('onum0');
         var iold = ioldValue - 20;
         $('#ifile').attr("value",iold);
      } else {
         console.log('onum-1');
      }

      var eold = Number($('#efile').attr("value"));
	  var iold = Number($('#ifile').attr("value"));

      if(data['cnum']==3) {
				var number = eold + 20;
				$('#efile').attr("value",number);
			} else if(data['cnum']==2) {
				var number = eold + 13;
				$('#efile').attr("value",number);
				var number = iold + 7;
				$('#ifile').attr("value",number);
			} else if(data['cnum']==1) {
				var number = eold + 7;
				$('#efile').attr("value",number);
				var number = iold + 13;
				$('#ifile').attr("value",number);
		
			} else if(data['cnum']==0) {
				var number = iold + 20;
				$('#ifile').attr("value",number);
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
	$('#next1').show();
	}
			
   })
   .catch(function (error) {
      console.log(error);
   })
  },
  sendData4() {   
      console.log("제발4")
      
   axios.get(this._baseUrl + 'survey/partone/surveyone', {
      params: { 
         onum: this.oldnum4,
         cnum: this.changenum4
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);
      var eoldValue = Number($('#efile').attr("value"));
	  var ioldValue = Number($('#ifile').attr("value"));
      
      if (data['onum'] == 3) {
         console.log('onum3');
         var eold = eoldValue - 20;
         $('#efile').attr("value",eold);
      } else if (data['onum'] == 2) {
         console.log('onum2');
         var eold = eoldValue - 13;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 7;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 1) {
         console.log('onum1');
         var eold = eoldValue - 7;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 13;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 0) {
         console.log('onum0');
         var iold = ioldValue - 20;
         $('#ifile').attr("value",iold);
      } else {
         console.log('onum-1');
      }

      var eold = Number($('#efile').attr("value"));
	  var iold = Number($('#ifile').attr("value"));

      if(data['cnum']==3) {
				var number = eold + 20;
				$('#efile').attr("value",number);
			} else if(data['cnum']==2) {
				var number = eold + 13;
				$('#efile').attr("value",number);
				var number = iold + 7;
				$('#ifile').attr("value",number);
			} else if(data['cnum']==1) {
				var number = eold + 7;
				$('#efile').attr("value",number);
				var number = iold + 13;
				$('#ifile').attr("value",number);
		
			} else if(data['cnum']==0) {
				var number = iold + 20;
				$('#ifile').attr("value",number);
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
  $('#next1').show();
}
			
   })
   .catch(function (error) {
      console.log(error);
   })
  },
  sendData5() {   
      console.log("제발5")
      
   axios.get(this._baseUrl + 'survey/partone/surveyone', {
      params: { 
         onum: this.oldnum5,
         cnum: this.changenum5
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);
      var eoldValue = Number($('#efile').attr("value"));
	  var ioldValue = Number($('#ifile').attr("value"));
      
      if (data['onum'] == 3) {
         console.log('onum3');
         var eold = eoldValue - 20;
         $('#efile').attr("value",eold);
      } else if (data['onum'] == 2) {
         console.log('onum2');
         var eold = eoldValue - 13;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 7;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 1) {
         console.log('onum1');
         var eold = eoldValue - 7;
         $('#efile').attr("value",eold);
         var iold = ioldValue - 13;
         $('#ifile').attr("value",iold);
      } else if (data['onum'] == 0) {
         console.log('onum0');
         var iold = ioldValue - 20;
         $('#ifile').attr("value",iold);
      } else {
         console.log('onum-1');
      }

      var eold = Number($('#efile').attr("value"));
	  var iold = Number($('#ifile').attr("value"));

      if(data['cnum']==3) {
				var number = eold + 20;
				$('#efile').attr("value",number);
			} else if(data['cnum']==2) {
				var number = eold + 13;
				$('#efile').attr("value",number);
				var number = iold + 7;
				$('#ifile').attr("value",number);
			} else if(data['cnum']==1) {
				var number = eold + 7;
				$('#efile').attr("value",number);
				var number = iold + 13;
				$('#ifile').attr("value",number);
		
			} else if(data['cnum']==0) {
				var number = iold + 20;
				$('#ifile').attr("value",number);
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
	$('#next1').show();
	}
			
   })
   .catch(function (error) {
      console.log(error);
   })
  },
  sbuttonone() {
   console.log("제출1")
      
   axios.get(this._baseUrl + 'survey/partone/sbuttonone', {
      params: { 
             qone: this.changenum1,
				 qtwo: this.changenum2,
				 qthree: this.changenum3,
				 qfour: this.changenum4,
				 qfive: this.changenum5
             
      }
   })
   .then(function (response) {
      var data = response.data;
      var values = Object.values(data);

  }).catch(function (error) {
   console.log(error);
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

#next1{
display:none;}
 
</style>