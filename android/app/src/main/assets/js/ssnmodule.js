// alert('onlineeeeeeeee 5');

var urlSsn = "http://ssn.tvapps.ir/alt2/ssnapps/index.php";

var Flaglog = false;
var xhrSsn;
var cntReq2 = 1;
var cinamaFlag;
//var appNameAdversarity=["ekran","aio","varzesh3","quizUp","difference","ssn","cinamaticket","mench","akharinKhabar","pishBini","hafez","videoVarzesh","mp4","atari","snapFood"]
// var pakageIdAdversarity=["Bf5ytxm5Ri","Dn4GCcZmzl","2mYUk5ufBT","Zbdz7KpraZ","CxZ5VvCOj0","QBy3iMmTrx","JY7u02z4Rn","67rg1xgpmc","3rGOWfR9DK","anxJq1WLdi","Vkk9MTnxUL","Yu7NdPbXoj","GVUNQSLZ0f","P6Y0EIX9yc","bJDnfF1F3H"]
//
// var htmlAdversarity=[
//   "<div id='Advertise_1_hamrahAval' pakageName='ekran' pakageId='Bf5ytxm5Ri'  style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='aio' pakageId='Dn4GCcZmzl' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='varzesh3' pakageId='2mYUk5ufBT' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='quizUp' pakageId='Zbdz7KpraZ' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='difference' pakageId='CxZ5VvCOj0' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='ssn' pakageId='QBy3iMmTrx' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='cinamaticket' pakageId='JY7u02z4Rn' style='width: 1920px;height: 100px;position:fixed;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='mench' pakageId='67rg1xgpmc' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='akharinKhabar' pakageId='3rGOWfR9DK' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='pishBini' pakageId='anxJq1WLdi' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='hafez' pakageId='Vkk9MTnxUL' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='videoVarzesh' pakageId='Yu7NdPbXoj' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='mp4' pakageId='GVUNQSLZ0f' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='atari' pakageId='P6Y0EIX9yc' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
//   "<div id='Advertise_1_hamrahAval' pakageName='snapfood' pakageId='bJDnfF1F3H' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='width:100%;height: 100% '>   </div>",
// ]
var AdvertiseShowTime=3000
var AdvertiseintervalTime=10000
var maxAdvertiseCount=3
var pakageIdAdversarity=[]
var htmlAdversarity=[
    "<div id='Advertise_1_hamrahAval' pakageName='snapfood' pakageId='bJDnfF1F3H' style='width: 1920px;height: 100px;position:absolute;right: 0px;bottom: 0px;z-index:99999999999;text-align: center'><img src='http://ssn.tvapps.ir/hamsamClient/3.0/images/NWeatherBack.png' style='position: relative;height: 100% '>   </div>",
]
//loadjscssfile("http://ssn.tvapps.ir/alt2/ssnapps/js/Advertise.js?t="+new Date().getTime(), "js");
loadjscssfile("http://ssn.tvapps.ir/alt2/ssnapps/js/crreq.js", "js");
loadjscssfile("http://ssn.tvapps.ir/alt2/ssnapps/css/pollclass.css", "css");

//loadjscssfile("http://ssn.tvapps.ir/alt2/ssnapps/js/canvasjs.min.js", "js");
function ajaxSsn(type, link, funSuccess, sendData) {
    if (typeof xhrSsn !== "undefined") {
        xhrSsn.abort();
    }
    // alert("111111 too ssnmodule be alt");

    ////////////////////////////////////////////////////////////

    var timeNow = $.now();

    // console.log("timeNow--->" + timeNow);

    // console.log("sendData ghable hash---->" + JSON.stringify(sendData));


    var sendParams = {
        "agent": timeNow,
        "cnt": cntReq2++
    };

    var exSendData = $.extend(sendData, sendParams);


    // console.log("sendData bade extend parse int---->" + JSON.stringify(exSendData));


    //newSendData = b64EncodeUnicode(b64EncodeUnicode(timeNow + parseInt(parseInt(newSendData)) + timeNow));
    // console.log("sendData bade base 64---->" + newSendData);

    var md5Before = infoSsn.encryptReq(((timeNow).toString()) + JSON.stringify(exSendData), 'ocihc');
    // console.log("md5before->" + md5Before);

    var base64fist = infoSsn.b64EncodeUnicode(md5Before);

    //  console.log("base64fist->" + base64fist);

    var md5fist = infoSsn.encryptReq(base64fist, 'ocihc');

    //  console.log("md5fist->" + md5fist);

    var base64second = infoSsn.b64EncodeUnicode(((timeNow).toString()) + ((md5fist).toString()));

    // console.log("base64second->" + base64second);


    var md5Second = infoSsn.encryptReq(base64second, timeNow);


    // console.log("md5 final->" + md5Second);


    var act = getParameterByName('act', link);


    if (act == 'pageshow') {

        // console.log("pv key tooye ajax pageshow code kon->" + infoSsn.pv);

        var base64User = infoSsn.b64EncodeUnicode(((infoSsn.pv).toString()) + ((md5Second).toString()));

        //  console.log("base64User->" + base64User);


        var md5User = infoSsn.encryptReq(base64User, infoSsn.pv);
        //var md5User = infoSsn.encryptReq(md5Second, infoSsn.pv);


        //  console.log("md5finaluser->" + md5User);

        md5Second = md5User;
    }

    var md5final = infoSsn.encryptReq(md5Second, timeNow);
    //console.log("md5final" + md5final);


    var obj = {'hdata': exSendData, 'hash': md5final};

    // console.log("final send data--->" + JSON.stringify(obj));

    sendData = "datas=" + JSON.stringify(obj);

    // log(sendData);
    // alert("sendData->" + sendData);

    ////////////////////////////////////////////////////////////
    xhrSsn = $.ajax({
        type: type,
        dataType: "html",
        data: sendData,
        contentType: "application/x-www-form-urlencoded",
        url: link,
        success: funSuccess,
        timeout: 0,
        tryCount: 0,
        retryLimit: 6,
        beforeSend: function (xhr) {
            // console.log("start,link---->" + link);
        },
        error: function (xhr, textStatus, errorThrown) {
            // console.log("erorr = " + xhr + " " + textStatus + "" + errorThrown);
            if (textStatus == "timeout") {
                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    $.ajax(this);
                    return;
                } else {
                    console.log("a");
                }
                return;
            }
            if (xhr.status == 500) {
            } else {
            }
        },
        statusCode: {
            404: function () {
                //  console.log("page not found");
            }
        }
    }).done(function () {
        // console.log("success");
    }).fail(function () {
        // console.log("error");
    }).always(function () {
        // console.log("complete");
    });
}

function log(msg) {
    if (Flaglog) {
        var logsEl = document.getElementById("logs");
        if (msg) {
            //console.log("[DeviceInfo]: ", msg);
            logsEl.innerHTML += msg + "<br />";
        } else {
            logsEl.innerHTML = "";
        }
        logsEl.scrollTop = logsEl.scrollHeight;
        console.log(msg);
    }
}

var cntTime = 0;
var cntPage = 0;
$(document).on("pageshow", "*[data-role=\"page\"]", function () {
    infoSsn.page = $(this).attr("id");
    cntPage++;
    //alert("on page show,is voted->" + infoSsn.isVoted);
    if (infoSsn.isVoted == 0) {
        infoSsn.addPollListener();
    }

});
$(document).on("pagebeforehide", "#one", function () {
});
//$(document).unload(unregister2);
var hidessntimeout;
function unregister2() {
}
var hideAdvertise;
var AdvertiseIntervals
var countAdvertise = 0

function AdvertiseIntervals(index){
    clearInterval(AdvertiseIntervals);


    showAdvertise(index)
    AdvertiseIntervals = setInterval(function () {
        showAdvertise(index)

    }, AdvertiseintervalTime);
}
function showAdvertise(index){
    //var data =  "<div id='Advertise_1_hamrahAval'  style='width: 1920px;height: 1080px;position:absolute;right: 0px;top: 0px;z-index:99999999999;'> <div id='pnotif-1'  class='push-notif' num='1'> <div style='background: black;opacity: 0.7;width: 1920px;height: 1080px;right: 0px;top: 0px;;position: fixed;'> </div> <div style='top:353px;right:608px;position: fixed;overflow: hidden;background: #ebebeb;border-radius: 7px;width: 648px;min-height: 172px'> <div style='width: 100%;height: 60px;background: #337ab7;position: absolute;top: 0px;'> <img src='http://ssn.tvapps.ir/alt2/ssn/images/version/hamsam.png' style='margin-right: 20px; margin-top:7px;height: 43px;float: right;position: relative '> <div style='float: right;height: 60px;line-height: 64px;direction: rtl ;text-align: right;color:#ccdeed;margin-right: 10px;font-size: 11px;font-weight: bold'>اپلیکیشن کاربران تلویزیون های هوشمند سامسونگ </div> </div> <img src='http://ssn.tvapps.ir/alt3/ssn/images/apps/SSN/ssn/0.png' style='z-index: 10000;position: absolute;width: 120px;top: 35px;left: 30px;'> <div  style='text-align: right;font-size: 19px;color: #000;z-index: 10000;direction: rtl;font-family: BYekan;position: relative;margin-top: 80px;max-width: 470px;margin-right: 21px;float: right;'>ما را در تلگرام و اینستاگرام به آدرس hamsamtv@ دنبال کنید. </div> </div> </div>"
    // var myDiv = $("<div></div>");
    // //myDiv.addClass("logs");
    // myDiv.attr("id", "Advertise");
    //myDiv.html(data)
    countAdvertise = countAdvertise + 1;
    // webapis.productinfo.getDuid()
    // var data = {id: 1,value:infoSsn.appId};
    // infoSsn.ajaxNew("POST",  infoSsn.newUrl + "activity/start", infoSsn.AjaxSucces,data);
    if (($('#Advertise_1_hamrahAval').length) != 0) {
        $("#Advertise_1_hamrahAval").remove()
    }
    $("body").append(htmlAdversarity[index]);
    hideAdvertise= setTimeout(function () {

        $("#Advertise_1_hamrahAval").css("display", "none");
        // console.log("finiiiiiiiiiiiiiiish");
    }, AdvertiseShowTime);
    if(countAdvertise>=maxAdvertiseCount){
        clearInterval(AdvertiseIntervals);
    }
}
function pageShowSuccess(data) {
    // console.log("secpppppppppppppppppppppppppppppppppppppppppppponds");
    //  console.log("data--->" + data);
    log(data);
    var obj = jQuery.parseJSON(data);
    if (obj.error == "false") {
        infoSsn.tk = obj.tk;
        if (obj.view != "") {
            // console.log("viewwwwwwwww->>>>>>>>" + obj.view);
            //  console.log("inja bayad append kone----------------->" + "#" + obj.pageEng);
            if (!document.getElementById("ssnMsg")) {
                // console.log("too online appeeeeeeeeeeeeeeeeeeeeeend");
                $("body").append(obj.view);

                if(infoSsn.appId==1){
                    var tvyear=webapis.productinfo.getModelCode().split("_", 1);
                    // console.log('tv year->'+tvyear);
                    if(tvyear=='17'||tvyear=='18'||tvyear==19) {
                        tizen.push.connect(pushstateChangeCallback, pushnotificationCallback, pusherrorCallback);
                    }
                }

                // alert("Sare obj.is_poll" + obj.is_poll);
                if (obj.is_poll == "1") {    //age dasht nazar sanji
                    infoSsn.pollID = obj.poll_id;
                    infoSsn.ansCount = parseInt(obj.poll_num);
                    infoSsn.pollInitialize(obj.poll_type);


                    // infoSsn.drawPie(obj.pie);

                } else {
                    //age view dasht amma typesh 1 nabood(az too db nakhoonde bood)
                    var timeOutTime = 5000;
//                    if (infoSsn.appId == "1") {
//
//                        //  timeOutTime = 60000;
//                    } else if (infoSsn.appId == "147") {
//
//                        timeOutTime = 120000;
//                    } else if (infoSsn.appId == "161") {
//
//                        //  timeOutTime = 60000;
//                    }
//                    //console.log("timeOutTime--->" + timeOutTime);
                    hidessntimeout= setTimeout(function () {
                        $("#ssnMsg").css("display", "none");
                        // console.log("finiiiiiiiiiiiiiiish");
                    }, timeOutTime);


                }


            } else {
                //console.log("doooooooooooooont");
            }
        }

    }
    //console.log("infoSsn.appId ----------->" + infoSsn.appId);
    if (infoSsn.appId == "1") {
        notificationSsn.manage(data);
    } else if (infoSsn.appId == "161") {
        notificationSsn.manage(data);
        // alert("in sar");


    }
}

var infoSsn = {
    obj: {},
    appId: "",
    userId: "",
    page: "",
    objClick: {},
    pageOne: "",
    isVoted: -1,
    pollID: "",
    pv: "",
    checkReq: -1,
    tk: "",
    newUrl:"http://ssn.tvapps.ir/hamsam/pservice/api/v1/",
    token:"",
    appIdArr:[214,213,119,208,212,211,147,126,215,133,139,121,207,122,153,130],
    sellerIdArr:["Bf5ytxm5Ri","ZV8ZR8uuiv","Dn4GCcZmzl","3rGOWfR9DK","anxJq1WLdi","CxZ5VvCOj0","Zbdz7KpraZ","P6Y0EIX9yc","bJDnfF1F3H","JY7u02z4Rn","GVUNQSLZ0f","Yu7NdPbXoj","H4SCeCqjTd","Vkk9MTnxUL","C9WyriI8YK","2mYUk5ufBT"],
    androidPkgName: ['AAAAA'],
    androidPkgId: [1000],
    isAndroid: 1,
    appIDNew:0
};

var xhr2

infoSsn.ajaxNew = function (type, link, funSuccess,data) {

    // if (typeof xhr2 !== 'undefined')
    //  xhr2.abort();

    xhr2 = $.ajax({
        type: 'POST',
        dataType: "html",

        contentType: 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        headers: {
            'Accept': 'application/json',
        },
        url: link,
        success: funSuccess,
        tryCount: 0,
        retryLimit: 0,
        data:data,
        beforeSend: function (xhr2) {

            xhr2.setRequestHeader("Authorization", "Bearer " +  infoSsn.token);

        },
        error: function (xhr2, textStatus, errorThrown) {

            if (textStatus == 'timeout' || textStatus == 'error') {

                this.tryCount++;
                if (this.tryCount <= this.retryLimit) {
                    //try again
                    $.ajax(this);
                    return;
                } else {

                }
                return;
            }

            if (xhr2.status == 500) {

            } else {
                //handle error

            }
        },
        statusCode: {
            404: function () {

            }
        },
    }).done(function () {

    })
        .fail(function () {

        })
        .always(function () {

        });
}
infoSsn.getProduct = function () {
    //console.log("functiooooooooooooooooooooooon");
    this.obj.ProductInfoConfigKey = JSON.stringify(webapis.productinfo.ProductInfoConfigKey);
    this.obj.ProductInfoNoGlass3dSupport = JSON.stringify(webapis.productinfo.ProductInfoNoGlass3dSupport);
    this.obj.getDuid = webapis.productinfo.getDuid();
    this.obj.getFirmware = webapis.productinfo.getFirmware();
    this.obj.getLocalSet = webapis.productinfo.getLocalSet();
    this.obj.getModel = webapis.productinfo.getModel();
    this.obj.getModelCode = webapis.productinfo.getModelCode();
    this.obj.getNoGlass3dSupport = webapis.productinfo.getNoGlass3dSupport();
    this.obj.getPsid = webapis.productinfo.getPsid();
    this.obj.getRealModel = webapis.productinfo.getRealModel();
    // this.obj.getRealModel = "sssssss";
    this.obj.getSmartTVServerType = webapis.productinfo.getSmartTVServerType();
    this.obj.getSmartTVServerVersion = webapis.productinfo.getSystemConfig(webapis.productinfo.ProductInfoConfigKey.CONFIG_KEY_SERVICE_COUNTRY);
    this.obj.getTunerEpop = webapis.productinfo.getTunerEpop();
    this.obj.getVersion = webapis.productinfo.getVersion();
    this.obj.isSoccerModeEnabled = webapis.productinfo.isSoccerModeEnabled();
    this.obj.isTtvSupported = webapis.productinfo.isTtvSupported();
    this.obj.isUdPanelSupported = webapis.productinfo.isUdPanelSupported();
    this.obj.getAvailableMemory = tizen.systeminfo.getAvailableMemory();
    this.obj.getTotalMemory = tizen.systeminfo.getTotalMemory();
    this.obj.getCapability = tizen.systeminfo.getCapability("http://tizen.org/feature/network.wifi");
    this.obj.getCountDesplay = tizen.systeminfo.getCount("DISPLAY");
    this.obj.getdesplay = $(window).width() + "*" + $(window).height();
    this.obj.getVersion = webapis.tvinfo.getVersion();
    this.obj.getSmartTVServerVersion = webapis.productinfo.getSmartTVServerVersion();
    this.obj.isTvsPicSizeResized = webapis.tvinfo.isTvsPicSizeResized();
    this.appCtrl = tizen.application.getCurrentApplication().getRequestedAppControl();
    this.info = tizen.application.getAppInfo(null);
    this.appContext = tizen.application.getAppContext(null);
    this.obj.callerAppId = this.appCtrl.callerAppId;
    this.obj.appname = this.info.name;
    // console.log("app name--------------->" + this.obj.appname);
    this.obj.appiconPath = this.info.iconPath;
    this.obj.appversion = this.info.version;
    this.obj.appshow = this.info.show;
    this.obj.appcategories = this.info.categories;
    this.obj.appinstallDate = this.info.installDate;
    this.obj.apppackageId = this.info.packageId;
    this.obj.appidContext = this.appContext.id;


    var model = this.obj.getModelCode;

    //  console.log('this.obj.apppackageId ---- > ' + this.obj.apppackageId)


    //tzjjTgVquT
    if (this.obj.apppackageId == "JY7u02z4Rn") {//cinama ticket
        setTimeout(function () {

            $.get("https://ipinfo.io", function (response) {


                //  console.log('ip info' + JSON.stringify(response));

                if (response.country == "IR") {
                    //    console.log('iraneeeeeeeee --- >' + model.indexOf("17"));
                    cinamaFlag = 1;
//                    if (model.indexOf("17") > -1) {
//                        cinamaFlag = 0
//                    } else {
//                        cinamaFlag = 1;
//                    }

                } else {
                    //  console.log('gheire iraneeeee');
                    cinamaFlag = 0;
                }
            }, "jsonp")

        }, 2000)

    } else {

        //baraye test dar tarikhe 20.1.97 , 1 mishe.moghe ersal 0 bayad beshe
        cinamaFlag = 0;
    }


    console.log('apppackageId  dar js online = ' + this.obj.apppackageId)

    if (this.obj.apppackageId == "Zbdz7KpraZ") {//quizup
        console.log('too ifeeeee quizup')


        setTimeout(function () {

            console.log('too timeoute quizup')

            loadjscssfile("http://qup.tvapps.ir/addedJS.js?t=" + new Date().getTime(), "js")

        }, 10000);



    } else {
        console.log('too else quizup')
    }


    return this.obj;
};
infoSsn.actPage = function (type) {
    // console.log("asre interval ba type  eeeeeeeeeeee--->" + type + ",check req->" + infoSsn.checkReq);
    // alert("asre interval ba type  eeeeeeeeeeee--->" + type + ",check req->" + infoSsn.checkReq);
    var infoAPP = tizen.application.getAppInfo(null);
    var apppackageIDApp = infoAPP.packageId;
    //dovomi
    //type=2 mandegari
    //type=3 exit
    //type=1 voroud

    if (infoSsn.checkReq != 0) {
        this.objClick.page = this.page;
        this.objClick.userId = this.userId;
        this.objClick.appId = this.appId;
        this.objClick.actPage = type;
        // if((this.appId ==214||this.appId ==213||this.appId ==119||this.appId ==208||this.appId ==212||this.appId ==211||this.appId ==147||this.appId ==126||this.appId ==215||this.appId ==133||this.appId ==139||this.appId ==121||this.appId ==207||this.appId ==122||this.appId ==153||this.appId ==130) && cntTime==0){
        //   infoSsn.FileSsystem("samsung-TK","read")
        //
        //
        //
        //
        //
        // }
        if (this.appId == 131 || this.appId == 154 || this.appId == 160 || this.appId == 162 || this.appId == 135 || this.appId == 151 || this.appId == 141 || this.appId == 129 || this.appId == 211 || this.appId == 214 || this.appId == 130|| this.appId == 212|| this.appId == 215|| this.appId == 216) {


            this.objClick.pageNum = parseInt(1);
        } else if (this.appId == 153) {
            this.objClick.pageNum = parseInt(disPasvand);
        } else if (this.appId == 120) {
            this.objClick.pageNum = parseInt(pageNum);
        } else if (this.appId == 124) {
            this.objClick.pageNum = parseInt(flagScene);
        } else if (this.appId == 142) {
            this.objClick.pageNum = parseInt(pageNumbCount);
        } else if (this.appId == 152) {
            this.objClick.pageNum = parseInt(dis);
            // console.log("oftad too if 152");
        } else {
            this.objClick.pageNum = parseInt(dis);
        }
        cntTime++;
        this.objClick.cntTime = parseInt(cntTime);

        if ((type == 2) && (this.appId == 119)) {
            //  alert("in aioooo");
            // console.log("in aioooo");
            //Stats.track('hamsamStay', 'hamsamStay');
        }
        if ((apppackageIDApp != "Dn4GCcZmzl") || (apppackageIDApp == "Dn4GCcZmzl" && parseInt(cntTime) <= 1)) {
            if ((infoSsn.userId != -1) || (infoSsn.userId == -1 && parseInt(cntTime) <= 1)) {
                // ajaxSsn("POST", urlSsn + "?act=pageshow&type=insert&cntPage=" + cntPage + "&tk=" + infoSsn.tk, pageShowSuccess, {
                //   data: JSON.stringify(this.objClick)
                // });
            }

        }
    } else if (infoSsn.checkReq == 0) {
        //  alert("check req 0 eeeee");
    }

};
$(document).ready(function () {

//    console.log("sare ready");
//     alert("sare ready");

    clearInterval(infoSsn.intervalClick);
    // console.log("oftad tooooooooooooooooo ready");
    setTimeout(function () {


        //  console.log("oftad too device detaaaaaaaaaaaaaaaaaaaaaail");
        cntTime = 0;
        var apppackageIDApp = 'AAAAA';
        if (infoSsn.isAndroid == 1) {
            if (infoSsn.androidPkgName.indexOf(apppackageIDApp) != -1) {
                infoSsn.appIDNew = infoSsn.androidPkgId[infoSsn.androidPkgName.indexOf(apppackageIDApp)];
                infoSsn.getToken();
                return false;
            }
        }

        var infoAPP = tizen.application.getAppInfo(null);
        var apppackageIDApp = infoAPP.packageId;
        // console.log("to ready++++++++++++++++++++++++++++++++" + apppackageIDApp)
        //first

        if(infoSsn.sellerIdArr.indexOf(apppackageIDApp) != -1){
            infoSsn.appIDNew= infoSsn.appIdArr[infoSsn.sellerIdArr.indexOf(apppackageIDApp)]
            console.log("before----------filesystem")
            infoSsn.FileSsystem("samsung-TK","read")

        }
        //var htmlHamsam="<div id='Advertise_1_hamsam' style='width: 1920px;height: 1080px;position:absolute;right: 0px;top: 0px;z-index:99999999999;'><div style='background: black;opacity: 0.7;width: 1920px;height: 1080px;right: 0px;top: 0px;;position: fixed;'> </div> <div id='pnotif-1' style='top:353px;right:608px;position: fixed;overflow: hidden;background: #ebebeb;border-radius: 7px;width: 648px;min-height: 172px' class='push-notif' num='1'> <div style='width: 100%;height: 60px;background: #337ab7;position: absolute;top: 0px;'>  <img src='http://ssn.tvapps.ir/alt2/ssn/images/version/hamsam.png' style='margin-right: 20px; margin-top:7px;height: 43px;float: right;position: relative '>  <div style='float: right;height: 60px;line-height: 64px;direction: rtl ;text-align: right;color:#ccdeed;margin-right: 10px;font-size: 11px;font-weight: bold'>      اپلیکیشن کاربران تلویزیون های هوشمند سامسونگ    </div></div> <img src='http://ssn.tvapps.ir/alt3/ssn/images/apps/SSN/ssn/0.png' style='z-index: 10000;position: absolute;width: 120px;top: 35px;left: 30px;'><div  style='text-align: right;font-size: 19px;color: #000;z-index: 10000;direction: rtl;font-family: BYekan;position: relative;margin-top: 80px;max-width: 470px;margin-right: 21px;float: right;'>   با شرکت در چالش های هم سام و کسب امتیاز از جوایز ارزنده این دوره برخوردار شوید. </div> </div> </div>";

        var htmlHamsam="<div id='Advertise_1_hamsam' style='width: 1920px;height: 1080px;position:absolute;right: 0px;top: 0px;z-index:99999999999;'><div style='background: black;opacity: 0.7;width: 1920px;height: 1080px;right: 0px;top: 0px;;position: fixed;'> </div> <div id='pnotif-1' style='top:353px;right:608px;position: fixed;overflow: hidden;background: #ebebeb;border-radius: 7px;width: 648px;min-height: 172px' class='push-notif' num='1'> <div style='width: 100%;height: 60px;background: #337ab7;position: absolute;top: 0px;'>  <img src='http://ssn.tvapps.ir/alt2/ssn/images/version/hamsam.png' style='margin-right: 20px; margin-top:7px;height: 43px;float: right;position: relative '>  <div style='float: right;height: 60px;line-height: 64px;direction: rtl ;text-align: right;color:#ccdeed;margin-right: 10px;font-size: 11px;font-weight: bold'>      اپلیکیشن کاربران تلویزیون های هوشمند سامسونگ    </div></div> <img src='http://ssn.tvapps.ir/alt3/ssn/images/apps/SSN/ssn/0.png' style='z-index: 10000;position: absolute;width: 120px;top: 35px;left: 30px;'><div  style='text-align: right;font-size: 19px;color: #000;z-index: 10000;direction: rtl;font-family: BYekan;position: relative;margin-top: 80px;max-width: 470px;margin-right: 21px;float: right;'>   با استفاده از اپ تلویزیون به صورت خودکار 10 درصد تخفیف سامسونگ برای سفارش شما اعمال خواهد شد.  </div> </div> </div>";



        if(apppackageIDApp == "bJDnfF1F3H"){
//if(apppackageIDApp =="test"){
            $("body").append(htmlHamsam);
            setTimeout(function () {

                $("#Advertise_1_hamsam").css("display", "none");
                $("#Advertise_1_hamsam").remove()
                // console.log("finiiiiiiiiiiiiiiish");
            }, 4000);
        }


        if(pakageIdAdversarity.indexOf(apppackageIDApp) != -1){
            AdvertiseIntervals(pakageIdAdversarity.indexOf(apppackageIDApp))
        }
        // alert("Sare ajax");
        if (apppackageIDApp != "QBy3iMmTrx") {


            // ajaxSsn("POST", urlSsn + "?act=deviceDetail&type=insert&cnttime=" + cntTime, funSuccess, {
            //   detail: JSON.stringify(infoSsn.getProduct())
            // });

        }


    }, 3500);


    drawLog();
});

// document.addEventListener("visibilitychange", function () {
//   if (document.hidden) {
//     // alert("Event listener hidden,checkreq->" + infoSsn.checkReq);
//     // console.log("Event listener hidden,check req->" + infoSsn.checkReq);
//     // console.log("hideeeeeeeeeeeeeeen too ready" + infoSsn.appId);
//     infoSsn.actPage(3);
//     cntTime = 0;
//     cntPage = 0;
//     clearInterval(infoSsn.intervalClick);
//   } else {
//     //  alert("Event listener show,check req->" + infoSsn.checkReq);
//     //  console.log("Event listener show,check req->" + infoSsn.checkReq);
//     cntTime = 0;
//     // console.log("shoooooooooooooooooooooow,cnttime->" + cntTime);
//     infoSsn.actPage(1);
//     infoSsn.intervalClick = setInterval(function () {
//       //  console.log("intervaaaaaaaaaaaaaaaaaaaaaaaaaaal event listener");
//       infoSsn.actPage(2);
//     }, 60000);
//   }
// });


function funSuccess(data) {
    // alert(infoSsn.obj.getdesplay);
    //  console.log("data------->" + data);
    // log(data);
    var data = jQuery.parseJSON(data);
    if (data.error == "false") {
        infoSsn.checkReq = 1;
        infoSsn.userId = data.userId;
        infoSsn.appId = data.appId;
        // if ('pv' in data) {
        infoSsn.pv = infoSsn.b64DecodeUnicode(infoSsn.b64DecodeUnicode(infoSsn.b64DecodeUnicode(data.pv)));
        // alert("pv key dare" + infoSsn.pv);
        //   console.log("info ssn pv key->" + infoSsn.pv);
        //   infoSsn.setParam("ssnKey", infoSsn.pv);
        // alert("ssnkey" + infoSsn.getParam("ssnKey"));
        //}
        // if ('tk' in data) {
        infoSsn.tk = data.tk;
        // alert("tk->" + infoSsn.tk);
        //  console.log("tk->" + infoSsn.tk);
        //  }

        infoSsn.actPage(1);

        //   console.log("keeeeeeeeeyyy-->" + data.pv);


        infoSsn.intervalClick = setInterval(function () {
            // console.log("intervaaaaaaaaaaaaaaaaaaaaaal funcseccess");
            infoSsn.actPage(2);
        }, 60000);
        if (data.view != "") {
            $("#" + infoSsn.page).append(data.view);
        }

    } else if (data.error == "true") {
        infoSsn.checkReq = 0;
        log(data.msg);
    }

}

function drawLog() {
    // console.log("Flaglog------------->" + Flaglog);
    if (Flaglog) {
        var container = $("<fieldset></fieldset>");
        container.attr("style", "margin-top:10px;clear: left;width: 95%;");
        var containerlog = $("<legend></legend>");
        containerlog.html("logs");
        container.append(containerlog);
        var myDiv = $("<div></div>");
        myDiv.addClass("logs");
        myDiv.attr("id", "logs");
        myDiv.attr("style", "border: 0px;overflow: auto;width: 100%;font-family: monospace;position: fixed;top: 20px;left: 20px;z-index: 999999999999999999999999999999999999999999999999999999999999;width: 500px;font-size: 22px;color: red;border: 1px solid red;direction: ltr;display: block;white-space: pre-line;");
        container.append(myDiv);
        $("body").append(container);
    }
}

infoSsn.setParam = function (key, value) {
    localStorage.setItem(key, value);
};
infoSsn.getParam = function (key) {
    return localStorage.getItem(key);
};
infoSsn.clearParam = function () {
    localStorage.clear();
};
infoSsn.b64EncodeUnicode = function (str) {
    // console.log("string to be base64ed-->" + str);
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
};
infoSsn.b64DecodeUnicode = function (str) {
    return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
};
infoSsn.encryptReq = function (str, key) {
    // console.log("md5-----************************------------->" + md5(md5(str, key + 'abc')) + ",cntReq-->" + cntReq2);
    // console.log("str->" + str);
    // console.log("key final->" + key + 'abc');
    return md5(md5(str, key + 'abc'));
};

function loadjscssfile(filename, filetype) {
    if (filetype == "js") { //if filename is a external JavaScript file
        var fileref = document.createElement('script')
        fileref.setAttribute("type", "text/javascript")
        fileref.setAttribute("src", filename)
    } else if (filetype == "css") { //if filename is an external CSS file
        var fileref = document.createElement("link")
        fileref.setAttribute("rel", "stylesheet")
        fileref.setAttribute("type", "text/css")
        fileref.setAttribute("href", filename)
    }
    if (typeof fileref != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileref)
}

infoSsn.addPollListener = function () {
    // alert("add poll listener ,app id--------->" + infoSsn.appId + "is vote4d--->" + infoSsn.isVoted);
    //alert("add poll listener ,app id--------->" + infoSsn.appId + "is vote4d--->" + infoSsn.isVoted);
    switch (infoSsn.appId) {
        case "1":

            if (webapis.productinfo.getModelCode().split("_", 1) != 15) {
                $("#ssnMsg").css("display", "none");
                //  console.log("app id ******** 1");
                var PageArray161 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "NineTeen", "Twenty", "TwentyOne", "TwentyTwo", "TwentyThree", "TwoentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty", "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine"];
                ///  console.log("PageArray------>" + PageArray161);
                // console.log("PageArray------>" + JSON.stringify(PageArray161));
//            for (var i = 0; i < PageArrayssn.length; i++) {
//                console.log("remove handlePage" + PageArrayssn[i]);
//                document.body.removeEventListener("keydown", eval('handlePage' + PageArrayssn[i]), false);
//            }
//            document.body.addEventListener("keydown", eval('handlePoll'), false);
                setTimeout(function () {
                    $("#ssnMsg").css("display", "block");
                    for (var i = 0; i < PageArray161.length; i++) {
                        //  console.log("remove handlePageeeeeeeeeee" + PageArray161[i]);
                        document.body.removeEventListener("keydown", eval('handlePage' + PageArray161[i]), false);
                        document.body.removeEventListener("keydown", eval('handlePageTwentyOne'), false);
                    }
                    //alert("add event listener--->");
                    document.body.removeEventListener("keydown", eval('handlePageTwentyOne'), false);
                    document.body.addEventListener("keydown", eval('handlePoll'), false);
                }, 2000);
            } else if (webapis.productinfo.getModelCode().split("_", 1) == 15) {
                $("#ssnMsg").css("display", "none");
            }


            break;
        case "161":
            // alert(webapis.productinfo.getModelCode().split("_", 1));
            // console.log(webapis.productinfo.getModelCode().split("_", 1));

            // console.log("app id ******** 161");
            var PageArray161 = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "NineTeen", "Twenty", "TwentyOne", "TwentyOne", "TwentyTwo", "TwentyThree", "TwoentyFour", "TwentyFive", "TwentySix", "TwentySeven", "TwentyEight", "TwentyNine", "Thirty", "ThirtyOne", "ThirtyTwo", "ThirtyThree", "ThirtyFour", "ThirtyFive", "ThirtySix", "ThirtySeven", "ThirtyEight", "ThirtyNine"];
            setTimeout(function () {
                for (var i = 0; i < PageArray161.length; i++) {
                    //  console.log("remove handlePageeeeeeeeeee" + PageArray161[i]);
                    document.body.removeEventListener("keydown", eval('handlePage' + PageArray161[i]), false);
                    document.body.removeEventListener("keydown", eval('handlePageTwentyOne'), false);
                }
                //alert("add event listener--->");
                document.body.removeEventListener("keydown", eval('handlePageTwentyOne'), false);
                document.body.addEventListener("keydown", eval('handlePoll'), false);
            }, 2000);


            break;
        case "173":  //aio
            //  console.log("App id 173**********");
            hideIme("username");
            hideIme("password");
            var pageArrAio = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"];
            for (var i = 0; i < pageArrAio.length; i++) {
                document.body.removeEventListener("keydown", eval('handlePage' + pageArrAio[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);

            break;
        case "119":  //aio
            // console.log("App id 173**********");
            hideIme("username");
            hideIme("password");
            var pageArrAio = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen"];
            for (var i = 0; i < pageArrAio.length; i++) {
                document.body.removeEventListener("keydown", eval('handlePage' + pageArrAio[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);

            break;
        case "130":
            //  console.log("sare aaaaaaaaaaaaaaaaaaaaad");
            for (var i = 0; i < numbArray.length; i++) {
                document.body.removeEventListener("keydown", eval('handlePage' + numbArray[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);

            break;
        case "147": //quizup

            var PageArray147 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];

            for (var i = 0; i < PageArray147.length; i++) {
                document.body.removeEventListener("keydown", eval('handlePage' + PageArray147[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);

            break;
        case "139": //mp4

            for (var i = 0; i < numbArray.length; i++) {
                document.body.removeEventListener("keydown", eval('handelPage' + numbArray[i]), false);

            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);

            break;
        case "121":  //video varzesh
            var PageArray = ["One", "Two", "Three", "Four", "Five"];
            for (var i = 0; i < PageArray.length; i++) {
                document.body.removeEventListener("keydown", eval('handlePage' + PageArray[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);


            break;
        case "124":  //video 90
            document.body.removeEventListener("keydown", handlePageTwo, false);
            document.body.removeEventListener("keydown", handelPageOne, false);
            document.body.removeEventListener("keydown", handlePageThree, false);
            document.body.addEventListener("keydown", eval('handlePoll'), false);


            break;
        case "162": //sarafi

            document.body.removeEventListener("keydown", handelPageOne, false);
            document.body.addEventListener("keydown", eval('handlePollOld'), false);
            break;
        case "131"://ekhtelaf tasvir

            document.body.removeEventListener("keydown", handelPageOne, false);
            document.body.addEventListener("keydown", eval('handlePollOld'), false);

            break;
        case "211"://ekhtelaf tasvir jadid

            document.body.removeEventListener("keydown", handelPageOne, false);
            document.body.addEventListener("keydown", eval('handlePollOld'), false);

            break;
        case "134"://headphone

            var PageArray134 = ["One", "Two", "Three", "Four"];
            for (var i = 0; i < PageArray134.length; i++) {
                //   console.log("remove handlePage" + PageArray134[i]);
                document.body.removeEventListener("keydown", eval('handlePage' + PageArray134[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);


            break;
        case "199"://headphone

            var PageArray134 = ["One", "Two", "Three", "Four"];
            for (var i = 0; i < PageArray134.length; i++) {
                //   console.log("remove handlePage" + PageArray134[i]);
                document.body.removeEventListener("keydown", eval('handlePage' + PageArray134[i]), false);
            }
            document.body.addEventListener("keydown", eval('handlePoll'), false);


            break;
        default:


            break;
    }

};

function removePollListener() {
    infoSsn.isVoted = 1;
    //console.log("info ssn bad az feshar dadane dokme--->" + infoSsn.isVoted);
    //  alert("remove poll listener ,app id--------->" + infoSsn.appId + "is vote4d--->" + infoSsn.isVoted);
    /// console.log("remove poll listener ,app id--------->" + infoSsn.appId + "is vote4d--->" + infoSsn.isVoted);
    switch (infoSsn.appId) {
        case "1":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;
        case "161":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;
        case "119":
            hideIme("username");
            hideIme("password");
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();

            break;
        case "173":
            hideIme("username");
            hideIme("password");
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();

            break;
        case "130":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();

            break;
        case "147":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;
        case "139":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;
        case "121":
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            andisCount = dis - 1;
            var PageArray = ["One", "Two", "Three", "Four", "Five"];
            disPasvand = PageArray[andisCount];


            document.body.addEventListener("keydown", eval('handlePage' + disPasvand), false);

            break;
        case "124":

            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            andisCount = flagScene - 1;
            //alert("flag scene" + flagScene);
            var PageArray2 = ["One", "Two", "Three"];
            disPasvand = PageArray2[andisCount];
            // alert("dispasvand->" + disPasvand);
            if (disPasvand == 'One') {
                document.body.addEventListener("keydown", handelPageOne, false);
            } else if (disPasvand == 'Two') {
                document.body.addEventListener("keydown", handlePageTwo, false);
            } else if (disPasvand == 'Three') {
                document.body.addEventListener("keydown", handlePageThree, false);
            }


            break;
        case "162": //sarafi

            document.body.addEventListener("keydown", handelPageOne, false);
            document.body.removeEventListener("keydown", eval('handlePollOld'), false);
            break;
        case "131"://ekhtelaf tasvir

            document.body.addEventListener("keydown", handelPageOne, false);
            document.body.removeEventListener("keydown", eval('handlePollOld'), false);

            break;
        case "211"://ekhtelaf tasvir jadid

            document.body.addEventListener("keydown", handelPageOne, false);
            document.body.removeEventListener("keydown", eval('handlePollOld'), false);

            break;
        case "134"://headphone
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;
        case "199"://headphone
            document.body.removeEventListener("keydown", eval('handlePoll'), false);
            addEvLis();
            break;

        default:


            break;
    }
}

function handlePoll(e) {
    // alert("too poll handle");
    //console.log(e.keyCode + "poooooooooooooll->");
    var elem = document.getElementsByClassName("active-poll");
    var x = elem[0].getAttribute("x");
    var y = elem[0].getAttribute("y");
    var num = elem[0].getAttribute("num");
    // console.log("x-->" + x + "y--->" + y + "num===>" + num);
    switch (e.keyCode) {
        case TvKeyCode.KEY_1:

            removePollListener();


            break;
        case TvKeyCode.KEY_LEFT:


            // console.log("checkhover-" + (parseInt(x) + parseInt(1)) + "-" + y);
            var next = document.getElementById("checkhover-" + (parseInt(x) + parseInt(1)) + "-" + y);
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }


            break;
        case TvKeyCode.KEY_RIGHT:


            //console.log("checkhover-" + (parseInt(x) - parseInt(1)) + "-" + y);
            var next = document.getElementById("checkhover-" + (parseInt(x) - parseInt(1)) + "-" + y);
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }

            break;
        case TvKeyCode.KEY_DOWN:

            //console.log("checkhover-" + x + "-" + (parseInt(y) + parseInt(1)));
            //   var next = document.getElementById("checkhover-" + x + "-" + (parseInt(y) + parseInt(1)));
            var next = document.getElementById("checkhover-0-" + (parseInt(y) + parseInt(1)));
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }
            break;
        case TvKeyCode.KEY_UP:

            //console.log("checkhover-" + x + "-" + (parseInt(y) - parseInt(1)));
            //var next = document.getElementById("checkhover-" + x + "-" + (parseInt(y) - parseInt(1)));
            var next = document.getElementById("checkhover-0-" + (parseInt(y) - parseInt(1)));
            //  alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }

            break;
        case TvKeyCode.KEY_ENTER:
            //console.log("count e answer ha->" + infoSsn.ansCount);
            var checkVal = $("#check-" + num).val();
            //alert(checkVal);
            // $("#check-" + num).prop('checked', true);

            if (checkVal == 'close') {
                //  alert("close");
                var data = {data: '{"userID":"' + infoSsn.userId + '","appID": "' + infoSsn.appId + '", "pollID": "' + infoSsn.pollID + '"}'};
                //  ajaxSsn("POST", urlSsn + "?act=poll&type=decline", infoSsn.result, data);
                setTimeout(function () {
                    $("#ssnMsg").css("display", "none");
                    //  console.log("finiiiiiiiiiiiiiiish");
                }, 2000);
                removePollListener();

            } else if (checkVal != 'return') {
                // alert("return nis");

                var alreadyChecked = 0;
                var answerArray = [];
                $('.pollans').each(function (index, obj) {
                    if (($("#check-" + index).is(":checked"))) {
                        alreadyChecked++;
                        answerArray.push($("#check-" + index).val());
                    }
                });
                //console.log("alreadyChecked+" + alreadyChecked);
                if (!($("#check-" + num).is(":checked")))  //age entekhab nashode bood
                {
                    if (parseInt(1) + alreadyChecked == infoSsn.ansCount) {
                        answerArray.push(checkVal);
                        // console.log("answer array values=>" + JSON.stringify(answerArray));
                        //  alert("sabt kon");
                        $("#check-" + num).prop('checked', true);
                        //return;
                        var data = {data: '{"userID":"' + infoSsn.userId + '","appID": "' + infoSsn.appId + '", "pollID": "' + infoSsn.pollID + '","ansID":' + JSON.stringify(answerArray) + '}'};
                        //  var data = {data: '{"userID":"' + infoSsn.userId + '","appID": "' + infoSsn.appId + '", "pollID": "' + infoSsn.pollID + '","ansID":"1"}'};
                        // ajaxSsn("POST", urlSsn + "?act=poll&type=insert", infoSsn.result, data);
                        setTimeout(function () {
                            $("#ssnMsg").css("display", "none");
                            //  console.log("finiiiiiiiiiiiiiiish");
                        }, 2000);
                        removePollListener();
                    } else {
                        $("#check-" + num).prop('checked', true);
                    }

                } else {  //age entekhab shode bood
                    $("#check-" + num).prop('checked', false);
                }


            }

            break;
    }
}


function handlePollOld(e) {
    // alert("too poll handle");
    // console.log(e.keyCode + "poooooooooooooll->");
    var elem = document.getElementsByClassName("active-poll");
    var x = elem[0].getAttribute("x");
    var y = elem[0].getAttribute("y");
    var num = elem[0].getAttribute("num");
    // console.log("x-->" + x + "y--->" + y + "num===>" + num);
    switch (e.keyCode) {

        case 37:


            //  console.log("checkhover-" + (parseInt(x) + parseInt(1)) + "-" + y);
            var next = document.getElementById("checkhover-" + (parseInt(x) + parseInt(1)) + "-" + y);
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }


            break;
        case 39:


            //   console.log("checkhover-" + (parseInt(x) - parseInt(1)) + "-" + y);
            var next = document.getElementById("checkhover-" + (parseInt(x) - parseInt(1)) + "-" + y);
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }

            break;
        case 40:

            //  console.log("checkhover-" + x + "-" + (parseInt(y) + parseInt(1)));
            //   var next = document.getElementById("checkhover-" + x + "-" + (parseInt(y) + parseInt(1)));
            var next = document.getElementById("checkhover-0-" + (parseInt(y) + parseInt(1)));
            // alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }
            break;
        case 38:

            //  console.log("checkhover-" + x + "-" + (parseInt(y) - parseInt(1)));
            //var next = document.getElementById("checkhover-" + x + "-" + (parseInt(y) - parseInt(1)));
            var next = document.getElementById("checkhover-0-" + (parseInt(y) - parseInt(1)));
            //  alert("next" + next);
            if (next) {

                $(".checkhover").removeClass("active-poll");

                next.className += " active-poll";

            }

            break;
        case 13:
            //  console.log("count e answer ha->" + infoSsn.ansCount);
            var checkVal = $("#check-" + num).val();

            return;

            //alert(checkVal);
            $("#check-" + num).prop('checked', true);

            if (checkVal == 'close') {
                //  alert("close");
                var data = {data: '{"userID":"' + infoSsn.userId + '","appID": "' + infoSsn.appId + '", "pollID": "' + infoSsn.pollID + '"}'};
                //  ajaxSsn("POST", urlSsn + "?act=poll&type=decline", infoSsn.result, data);

            } else if (checkVal != 'return') {
                // alert("return nis");
                var data = {data: '{"userID":"' + infoSsn.userId + '","appID": "' + infoSsn.appId + '", "pollID": "' + infoSsn.pollID + '","ansID":"' + checkVal + '"}'};
                // ajaxSsn("POST", urlSsn + "?act=poll&type=insert", infoSsn.result, data);
            }
            setTimeout(function () {
                $("#ssnMsg").css("display", "none");
                // console.log("finiiiiiiiiiiiiiiish");
            }, 2000);

            removePollListener();
            break;
    }
}


infoSsn.pollInitialize = function (type) {
    //  alert("typeeeeeeeeeeeeeeeee->" + type);

    switch (type) {
        case "3":        //nazar sanjiiiii
            //  alert("type too inizialize->" + type);

            // console.log("too page show,info ssn counter0>->" + infoSsn.isVoted + ",hala mishe 0");
            infoSsn.isVoted = 0;
            $("#checkhover-0-0").addClass("active-poll");

            infoSsn.addPollListener();


            break;
        default:
            //  alert("beterek,type e nazarsanji 0 nis");
            //   console.log("beterek");

            break;
    }
};
infoSsn.result = function (data) {
    //  console.log("Daataaa->" + data);

};
infoSsn.drawPie = function (data) {


    //  console.log("poll pie--->" + data[0]['pie_name']);
    var stringpie = "";

    for (i = 0; i < data.length; i++) {
        stringpie = stringpie + '{y:' + data[i]['pie_count'] + ',indexLabel:"' + data[i]['pie_name'] + '"},';
    }
    //  console.log("String pieeeeeeeeeeee---->" + stringpie);
    var substringpie = stringpie.substring(0, (stringpie.length - 1));
    // console.log("String pieeeeeeeeeeee---->" + substringpie);
    setTimeout(function () {
        //    $("#ssnMsg").css("display", "none");
        //  console.log("finiiiiiiiiiiiiiiish");
        // alert("draaaaaaaaaaaaw");
        //  console.log("substringpie---->" + substringpie);

        var chart = new CanvasJS.Chart("chartContainer2",
            {
                title: {
                    text: "نظرسنجی"
                },
                legend: {
                    maxWidth: 450,
                    itemWidth: 220
                },
                data: [
                    {
                        type: "pie",
                        showInLegend: true,
                        legendText: "{indexLabel}",
                        dataPoints: [
                            substringpie

                        ]
                    }
                ]
            });
        chart.render();
    }, 8000);


    // $("#chartContainer").css("display", "block");
};

function getParameterByName(name, url) {
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
infoSsn.FileSsystem = function (fileName, action) {


    var documentsDir
    var isFile
    var fileSelected
    var _this = this
    console.log("loadFile0000000000000000000000000000000000000000000000000")


    function onsuccess(files) {
        console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo", files)
        for (var i = 0; i < files.length; i++) {
            if (files[i].name == fileName) {
                fileSelected = files[i]
                isFile = 1
            }

        }

        if (isFile) {//
            if (action == "Delete") {
                infoSsn.DelFileSystem(fileSelected, documentsDir)
            } else if (action == "read") {
                infoSsn.ReadFileSystem(fileName, documentsDir)
            }

        } else {
            if (action == "Delete") {

            } else if (action == "read") {
                return false
            }
        }
    }

    function onerror(error) {
        console.log("The error " + error.message + " occurred when listing the files in the selected folder");
    }

    tizen.filesystem.resolve(
        'documents',
        function (dir) {

            documentsDir = dir;
            dir.listFiles(onsuccess, onerror);


            //   CompressPath = dir.path + compressFileName;
        }, function (e) {
            console.log("Error" + e.message);
        }, "rw"
    );


}
infoSsn.ReadFileSystem = function (fileName, documentsDir) {

    console.log("FileRead0000000000000000000000000000000000000000000000000")
    var _this = this
    var file = documentsDir.resolve(fileName);


    file.openStream(
        "r",
        function (fs) {

            var text = fs.read(file.fileSize);

            fs.close();

            infoSsn.risponseRead(text)

        }, function (e) {
            console.log("Error " + e.message);
        }, "UTF-8");
}
infoSsn.risponseRead = function (text) {

    infoSsn.token =JSON.parse(text).access_token

    //film ekran 10 vorood1
    var data = {id: 1,value:infoSsn.appIDNew};

    infoSsn.ajaxActivity(data)
}
infoSsn.ajaxActivity = function (data) {
    if(infoSsn.token != ""){
        infoSsn.ajaxNew("POST",  infoSsn.newUrl + "activity/start", infoSsn.AjaxSucces,data);
    }

}
infoSsn.AjaxSucces = function (data) {


}




infoSsn.getToken = function () {

    var json = {
        fromOnlineJs: 1,
    };
    var jsonObj = JSON.stringify(json);

    setTimeout(function () {
        // alert("getToken 22-->" + jsonObj)
        window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify({type: 'getToken', data: jsonObj}))
    },0)

    // setTimeout(() => {
    //     window.ReactNativeWebView &&
    //     window.ReactNativeWebView.postMessage(
    //         JSON.stringify({type: "getToken", data: ""})
    //     );
    // }, 0);
}
infoSsn.loginUserData = function (data) {
    // infoSsn.token = JSON.stringify(data).data.access_token;
    // alert("loginUserData ->"+data.data);
    infoSsn.responseRead(data.data)
    // alert('loginUserData11 ===> ' + (data));
    // alert('loginUserData22 ===> ' + (data.data));
    // alert('loginUserData22-- ===> ' + (data.data.access_token));
    // alert('loginUserData33 ===> ' + JSON.stringify(data.data));
    // alert('loginUserData44 ===> ' + JSON.parse(data.data).access_token);
}
infoSsn.responseRead = function (text) {
    infoSsn.token = JSON.parse(text).access_token;
    // alert("infoSsn.token       " + infoSsn.token)
    var data = {id: 1, value: infoSsn.appIDNew};
    infoSsn.ajaxActivity(data);
};
