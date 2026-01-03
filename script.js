// YouTube URLから動画IDを抽出
function extractVideoId(url) {
    if (!url) return null;
    // youtu.be/形式の場合
    if (url.includes('youtu.be/')) {
        return url.split('youtu.be/')[1].split('?')[0];
    }
    // youtube.com/watch?v=形式の場合
    if (url.includes('youtube.com/watch?v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return null;
}

// YouTubeのサムネイルURLを生成（限定公開の場合は動作しない可能性あり）
function getYouTubeThumbnail(videoId, quality = 'maxresdefault') {
    if (!videoId) return null;
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
}

// 画像の読み込みを試みる（失敗時はfalseを返す）
function testImageLoad(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

// 動画サムネイルを設定
async function setVideoThumbnail(item) {
    const videoUrl = item.getAttribute('data-video-url');
    const thumbnailAttr = item.getAttribute('data-thumbnail');
    const imgElement = item.querySelector('.masonly-image img');
    
    if (!imgElement) return;
    
    // 手動でサムネイルが指定されている場合はそれを使用
    if (thumbnailAttr) {
        imgElement.src = thumbnailAttr;
        return;
    }
    
    // 動画URLがない場合は何もしない
    if (!videoUrl) return;
    
    // YouTubeのサムネイルを試みる
    const videoId = extractVideoId(videoUrl);
    if (videoId) {
        // まず高解像度を試す
        const thumbnailUrl = getYouTubeThumbnail(videoId, 'maxresdefault');
        const isAvailable = await testImageLoad(thumbnailUrl);
        
        if (isAvailable) {
            imgElement.src = thumbnailUrl;
        } else {
            // 高解像度が失敗した場合は標準解像度を試す
            const standardThumbnail = getYouTubeThumbnail(videoId, 'hqdefault');
            const isStandardAvailable = await testImageLoad(standardThumbnail);
            
            if (isStandardAvailable) {
                imgElement.src = standardThumbnail;
            }
            // どちらも失敗した場合はプレースホルダーのまま
        }
    }
}

// リサイズ時のデバウンス処理
let resizeTimer;
function debounceResize() {
    const masonlyGrid = document.querySelector('.masonly-grid');
    if (masonlyGrid) {
        // リサイズ中は一時的にwill-changeを無効化してパフォーマンスを向上
        masonlyGrid.style.willChange = 'auto';
    }
    
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (masonlyGrid) {
            // リサイズ完了後にwill-changeを再設定
            masonlyGrid.style.willChange = 'column-count';
        }
    }, 150);
}

// クリックイベントの処理
document.addEventListener('DOMContentLoaded', function() {
    const masonlyItems = document.querySelectorAll('.masonly-item[data-id]');
    
    masonlyItems.forEach(item => {
        // 動画サムネイルを設定
        const videoUrl = item.getAttribute('data-video-url');
        if (videoUrl) {
            setVideoThumbnail(item);
        }
        
        item.addEventListener('click', function() {
            const workId = this.getAttribute('data-id');
            // すべての作品を詳細ページに遷移
            window.location.href = `detail.html?id=${workId}`;
        });
    });
    
    // リサイズイベントにデバウンスを適用
    window.addEventListener('resize', debounceResize, { passive: true });
});

