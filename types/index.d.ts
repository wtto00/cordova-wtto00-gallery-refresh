/**
 * 刷新相册
 */
declare namespace GalleryRefresh {
  /**
   * 刷新保存在本地的图片，使之立即在相册中展示
   * @param path 保存的图片地址，请使用以 file:/// 开头的地址
   * @param onSuccess 成功回调
   * @param onFail 失败回调
   */
  function refresh(
    path: string,
    onSuccess: (msg: string) => void,
    onFail: (reason: string) => void
  ): void;
}

interface Window {
  galleryRefresh: typeof GalleryRefresh;
}
