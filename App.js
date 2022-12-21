/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState, useCallback } from "react";
import type { Node } from "react";
import {
  StyleSheet,
  BackHandler,
  Platform,
  Linking,
  Alert,
  PermissionsAndroid,
  TVEventHandler, I18nManager,
} from "react-native";

import { Colors, Header } from "react-native/Libraries/NewAppScreen";
import Video from "react-native-video";
import { WebView } from "react-native-webview";
import Spinner from "react-native-loading-spinner-overlay";
// import SharedGroupPreferences from "react-native-shared-group-preferences";
import DeviceInfo from "react-native-device-info";
import RNExitApp from "react-native-exit-app";
import { getMacLanAddress } from "react-native-device-info/src/index";

let webview = {};
let _tvEventHandler: any;

const App: () => Node = () => {
  let player = {};
  const [ref, setRef] = useState(true);
  const [spinner, setSpinner] = useState(true);
  const [userData, setUserData] = useState({});
  const [macAddress, setMacAddress] = useState("");
  const [macLan, setMacLan] = useState("");
  const [videoShow, setVideoShow] = useState(false);
  const [playerUrl, setPlayerUrl] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rateVideo, setRateVideo] = useState(1.0);
  const [isFull, setIsFull] = useState(false);
  const [uid, setUid] = useState("");
  const [tvType, setTvType] = useState(1);
  const [web, setWeb] = useState(1.0);
  // const [videoDirection, setVideoDirection] = useState({});
  const [fullScreenVideo, setFullScreenVideo] = useState({
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0, top: 0,
  });


  const _enableTVEventHandler = () => {
    _tvEventHandler = new TVEventHandler();
    _tvEventHandler.enable(this, function(cmp, evt) {
      console.log(evt);
      if (evt.eventType === "right") {
      } else if (evt.eventType === "up") {
      } else if (evt.eventType === "left") {
      } else if (evt.eventType === "down") {
      } else if (evt.eventType === "playPause") {
      }
    });
  };


  useEffect(() => {
    // alert(I18nManager.isRTL)
    // if(I18nManager.isRTL){
    //   setFullScreenVideo({
    //     position: "absolute",
    //     width: "82%",
    //     height: "100%",
    //     right: 0, top: 0,})
    // }else{
    //   setFullScreenVideo({
    //     position: "absolute",
    //     width: "82%",
    //     height: "100%",
    //     left: 0, top: 0,})
    // }
    // testPlayVideo()
    getMacId();
    getMacLan();

 }, []);

  useEffect(() => {
    // _enableTVEventHandler();
    if (Platform.OS === "android") {
      BackHandler.addEventListener("hardwareBackPress", onAndroidBackPress);
      dealWithPermissions();
    }
    return () => {
      if (Platform.OS === "android") {
        BackHandler.removeEventListener("hardwareBackPress");
      }
    };
  }, []);

  const getMacLan = () => {
    DeviceInfo.getMacLanAddress().then((result) => {
      // console.log("result", result);
      setMacLan(result);
    })
      .catch((error) => console.warn("getMac: no", error));
  };

  const getMacId = () => {
    DeviceInfo.getMacAddress().then((mac) => {
      // console.log("mac", mac);
      setMacAddress(mac);
    });
  };


  const onAndroidBackPress = () => {
    //console.log(JSON.stringify(this.webView))
    //this.webView.ref.goBack();
    //return true;

    //webview.ref.goBack();
    //console.log(webview.ref)

    // webview.ref.injectJavaScript( "controller.$data.activePage =5" );
    //  webview.ref.injectJavaScript( "var evt = new KeyboardEvent('eventali', {'keyCode':1, 'which':10009});window.dispatchEvent (evt);" );
    //  webview.ref.injectJavaScript( "var evt = new KeyboardEvent('keydown', {'keyCode':1, 'which':10009});window.dispatchEvent (evt);" );

    //webview.ref.injectJavaScript('controller.handleBack()');
    //return true;
    let params = { type: "returnPage", data: "" };
    const param = JSON.stringify(params);
    if (webview.ref) {
      // console.log("backe app.js");
      //webview.ref.injectJavaScript( 'window.controller.$emit("PostMessages", '+param+')' );
      //webview.ref.goBack();
      // webview.ref.injectJavaScript("handleBack()");
      webview.ref.injectJavaScript("window.vm.$emit(\"PostMessages\", " + param + ")");

      return true;
    }
    return false;
  };

  const sendDataInWebView = (type, data, calltype = "") => {
    // console.log('///////webviewRef = ',type,data,webview.ref);
    //alert('step3')

    let params = { type: type, data: data };
    const param = JSON.stringify(params);
    // console.log("param", param);

    if (webview.ref) {
      if (calltype != "") {
        if (JSON.parse(calltype).fromOnlineJs == 1) {
          webview.ref.injectJavaScript("infoSsn.loginUserData(" + param + ")");
          return false;
        }

      } else {
        webview.ref.injectJavaScript("window.vm.$emit(\"PostMessages\", " + param + ")");
      }
    }
  };

  const playVideo = (data) => {
    // alert(data);
    // alert("play video -> " + data.video);
    // alert("play poster -> " + data.poster);
    setPlayerUrl(data.video);
    setPosterUrl(data.poster);
    setVideoShow(true);
  };

  const testPlayVideo = () => {
    // alert(data);
    // alert("play video -> " + data.video);
    // alert("play poster -> " + data.poster);

    // alert('testPlayVideo')

    const videoUrl = "http://92.42.50.29/PLTV/88888888/224/3221226614/index.m3u8?rrsip=92.42.50.29&zoneoffset=0&devkbps=462-3000&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&tenantId=9805&accountinfo=Xrt3KWcoCI5FlXhu5Zv8JxQnVoci7noamwPvHTQ6SQVrjR7xZ7nipIwU5pQG2f%2Bq%2BLz9EbXMj63mpUXJp%2FZIaRvnmpBPEQUyO0R0FdMse4cLPyll2NC5rjL0Q3a2xsb1SI7KHdCxszTDM7fXkNro04RcSWuBLLH0De9WBPjgyJ8%3D%3A20211207150049%3AUTC%2C10001007206428%2C77.81.151.194%2C20211207150049%2Curn%3AHuawei%3AliveTV%3AXTV100000922%2C10001007206428%2C-1%2C0%2C1%2C%2C%2C2%2C%2C%2C%2C2%2C10000506368856%2C0%2C10500006361944%2C384af8f5386e59cb%2C%2C%2C1%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOyw7CIBRE_4YlAUotXbDSmJiYamJ1a27hFhtpqVBN_Hutj8VsZuZMZopgcLPS3ArWSM4ky6VsRdbYUkmwBZeZWhgDJOGtCloQA953g6uCnbHTYXnmjArBqWCzSD0Prj04zT7d6t43GHX-Bw8YH51BbVNLH5AoOBfRwdSFge49PI_R_yoE6_-5RaaUKsuyYIKTaXZrSNd3Qi6QlqEfIaLdBvcBdAs-IRnBXMFhBT3q4e79l9tF-37zAmu9M432AAAA"
    setPlayerUrl(videoUrl);
    setVideoShow(true);
  };

  const stopVideo = () => {
    // console.log("stop videooooooooooo -> ");
    setVideoShow(false);
    setPlayerUrl("");

  };

  const loadAppData = () => {

    let sendData = {
      ver: DeviceInfo.getSystemVersion(),
      packageName: DeviceInfo.getBundleId(),
      model: DeviceInfo.getModel(),
      androidId: DeviceInfo.getUniqueId(),
    };
    let params = {
      type: "appData", data: JSON.stringify(sendData),
    };
    const param = JSON.stringify(params);
    webview.ref.injectJavaScript("infoSsn.appData(" + param + ")");
  };

  const loadUserDataFromSharedStorage = async (data) => {
    try {
      // alert('******webview', webview.ref);
      const loadedData = await SharedGroupPreferences.getItem(
        "savedData",
        appGroupIdentifier,
      );
      // alert("step2" + loadedData);

      sendDataInWebView("userData", loadedData, data);
      //alert(JSON.stringify(loadedData));
    } catch (errorCode) {

      // alert('errorCode'+errorCode)
      sendDataInWebView("userData", "null", data);
    }
  };

  const saveUserDataToSharedStorage = async (data) => {
    try {
      const grantedStatus = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      const writeGranted =
        grantedStatus["android.permission.WRITE_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED;
      const readGranted =
        grantedStatus["android.permission.READ_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED;
      if (writeGranted && readGranted) {
        await SharedGroupPreferences.setItem(
          "savedData",
          data,
          appGroupIdentifier,
        );

        sendDataInWebView("setTokenSuccess", "{}");
      } else {
        sendDataInWebView("setTokenError", "{}");
      }
    } catch (errorCode) {
      //sendDataInWebView('setTokenError',{errorCode});
      //console.log(errorCode)
    }
  };

  const dealWithPermissions = async () => {
    try {
      const grantedStatus = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      ]);
      const writeGranted =
        grantedStatus["android.permission.WRITE_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED;
      const readGranted =
        grantedStatus["android.permission.READ_EXTERNAL_STORAGE"] ===
        PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      //console.warn(err)
    }
  };

  const handlePress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  const handleOnMessage = (event) => {
    const { type, data } = JSON.parse(event.nativeEvent.data);
    // alert('ver-->' + DeviceInfo.getSystemVersion() + 'packageName-->' + DeviceInfo.getBundleId() + 'model-->' + DeviceInfo.getModel() + 'androidId-->' + DeviceInfo.getUniqueId())
    // {ver:DeviceInfo.getSystemVersion(),packageName:DeviceInfo.getBundleId(),model:DeviceInfo.getModel(),androidId:DeviceInfo.getUniqueId()};
    // console.log('han
    // dleOnMessage type ===>  ' , JSON.parse(event.nativeEvent.data));
    // console.log('handleOnMessage data ===>  ' , data , type);
    switch (type) {
      case "browser":
        handlePress(data);
        break;
      case "setToken":
        // saveUserDataToSharedStorage(data);
        break;
      case "getToken":
        // loadUserDataFromSharedStorage(data);
        break;
      case "getPkgName":
        loadAppData();
        break;
      case "playVideo":
        playVideo(data);
        break;
      case "stopVideo":
        stopVideo(data);
        break;
      case "rateVideo":
        setRateVideo(data);
        break;
      case "fullscreen":

        // alert(data);
        // console.log(data, isFull);
        if (data == true) {
          setIsFull(true);
          // console.log("changeValue");
          setFullScreenVideo({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          });
        } else if (data == false) {
          setIsFull(false);
          if (I18nManager.isRTL) {
            setFullScreenVideo({
              position: "absolute",
              width: "82%",
              height: "100%",
              right: 0, top: 0,
            });
          } else {
            setFullScreenVideo({
              position: "absolute",
              width: "82%",
              height: "100%",
              left: 0, top: 0,
            });
          }
          // setFullScreenVideo({
          //   position: "absolute", top: 0, left: 0,
          //   width: "82%",
          //   height: "100%",
          // });
        }
        // console.log(isFull);
        break;
      case "checkFullScreen":
        sendDataInWebView("checkFullScreen", isFull);
        // console.log('checkFullScreen',isVideoFullScreen);
        break;
      case "exit":
        RNExitApp.exitApp();
        break;
    }
  };

  const onBuffer = () => {
    console.log("onBuffer");
  };

  const videoError = (e) => {
    // alert("videoError----->"+ e)
    // alert("videoError 22----->"+ JSON.stringify(e));
    // alert("videoError----->"+ JSON.parse(e));
  };

  const _renderVideo = () => {
    if (!videoShow) {
      return <></>;
    }

    return (
      <Video
        paused={false}
        resizeMode="cover"
        source={{ uri: playerUrl }} // Can be a URL or a local file.
        // source={{ uri: "http://92.42.50.29/PLTV/88888888/224/3221226614/index.m3u8?rrsip=92.42.50.29&zoneoffset=0&devkbps=462-3000&servicetype=1&icpid=&accounttype=1&limitflux=-1&limitdur=-1&tenantId=9805&accountinfo=Xrt3KWcoCI5FlXhu5Zv8JxQnVoci7noamwPvHTQ6SQVrjR7xZ7nipIwU5pQG2f%2Bq%2BLz9EbXMj63mpUXJp%2FZIaRvnmpBPEQUyO0R0FdMse4cLPyll2NC5rjL0Q3a2xsb1SI7KHdCxszTDM7fXkNro04RcSWuBLLH0De9WBPjgyJ8%3D%3A20211207150049%3AUTC%2C10001007206428%2C77.81.151.194%2C20211207150049%2Curn%3AHuawei%3AliveTV%3AXTV100000922%2C10001007206428%2C-1%2C0%2C1%2C%2C%2C2%2C%2C%2C%2C2%2C10000506368856%2C0%2C10500006361944%2C384af8f5386e59cb%2C%2C%2C1%2C1%2CEND&GuardEncType=2&it=H4sIAAAAAAAAADWOyw7CIBRE_4YlAUotXbDSmJiYamJ1a27hFhtpqVBN_Hutj8VsZuZMZopgcLPS3ArWSM4ky6VsRdbYUkmwBZeZWhgDJOGtCloQA953g6uCnbHTYXnmjArBqWCzSD0Prj04zT7d6t43GHX-Bw8YH51BbVNLH5AoOBfRwdSFge49PI_R_yoE6_-5RaaUKsuyYIKTaXZrSNd3Qi6QlqEfIaLdBvcBdAs-IRnBXMFhBT3q4e79l9tF-37zAmu9M432AAAA" }} // Can be a URL or a local file.
        ref={(ref) => {
          player.ref = ref;
        }} // Store reference
        onBuffer={onBuffer} // Callback when remote video is buffering
        onError={videoError} // Callback when video cannot be loaded
        poster={posterUrl}
        rate={rateVideo}
        repeat={true}
        controls={true}
        style={fullScreenVideo}

      />
    );
  };

  const renderWebview = () => {
    return (

      <WebView
        onLoadEnd={() => setSpinner(false)}
        onMessage={handleOnMessage}
        originWhitelist={["*"]}
        useWebKit={true}
        allowFileAccess={true}
        allowUniversalAccessFromFileURLs={true}
        mediaPlaybackRequiresUserAction={false}
        source={{
          uri:
            "file:///android_asset/index.html?mac_lan=" +
            macLan +
            "&version=" + DeviceInfo.getSystemVersion() +
            "&mac=" + macAddress +
            "&uid=" + uid +
            "&tv_type=" + tvType +
            "&t=" + new Date().getTime(),
        }}
        //         source={ { uri : "http://samyar.rasgames.ir/varzesh3/android/index.html?t="+new Date().getTime()}}
        // source={{ uri: "https://www.varzesh3.com/" }}
        ref={(ref) => {
          webview.ref = ref;
        }}
        domStorageEnabled={true}
        javaScriptEnabled={true}
        sharedCookiesEnabled={true}
        onNavigationStateChange={(navState) => {
          webview.canGoBack = navState.canGoBack;
        }}

        // onError={syntheticEvent => {
        //     navigation.replace( 'Control' );
        // }}
      />

    );
  };


  return (

    <>
      <Spinner
        visible={spinner}
        textContent={""}
        textStyle={{ color: "#000000" }}
      />
      {renderWebview()}
      {_renderVideo()}
    </>
  );
};

const styles = StyleSheet.create({
  Pdirection: {
    position: "absolute",
    width: "82%",
    height: "100%",
    left: 0, top: 0,
  },
  EDirection: { left: 0 },
});
export default App;
