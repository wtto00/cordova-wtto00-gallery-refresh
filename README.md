# cordova-wtto00-gallery-refresh

保存图片到本地储存后，刷新相册，使之立即显示在相册中

参考 [pouu69/cordova-plugin-gallery-refresh](https://github.com/pouu69/cordova-plugin-gallery-refresh)

- 🐛 修复 IOS 提示 `Invalid callback id` 的问题
- 🌟 添加 TS 类型提示

## 支持平台

- android
- ios

## 安装

```shell
cordova plugin add cordova-wtto00-gallery-refresh

# CAMERA_USAGE_DESCRIPTION 与 PHOTOLIBRARY_USAGE_DESCRIPTION 变量可选填，默认值为' '
cordova plugin add cordova-wtto00-gallery-refresh --variable CAMERA_USAGE_DESCRIPTION="camera_usage_description"  --variable PHOTOLIBRARY_USAGE_DESCRIPTION="photolibrary_usage_description"
```

## 用法

```javascript
window.galleryRefresh.refresh(
  entry.toURL(), // file local path
  function (success) {
    console.log(success);
  }, // success callback
  function (error) {
    console.log(error);
  } // error callback
);
```

```javascript
// Exam
var fileTransfer = new FileTransfer();
var uri = encodeURI(this.args.url);
var fileURL = fileEntry.toURL();

console.log(fileEntry);
fileTransfer.download(
  uri, // file's uri
  fileURL, // where will be saved
  function (entry) {
    console.log("Successful download...", entry.toURL());
    window.galleryRefresh.refresh(
      entry.toURL(),
      function (success) {
        console.log(success);
      },
      function (error) {
        console.log(error);
      }
    );
  },
  function (error) {
    console.log("download error source " + error.source);
    console.log("download error target " + error.target);
    console.log("upload error code" + error.code);
  },
  null, // or, pass false
  {}
);
```
