// ソフト名とロゴアイコン名のマッピング（現時点で使用されているソフトのみ）
// simpleicons.orgのアイコン名を使用
const softwareIconNames = {
    "LINE": "line",
    "Microsoft Powerpoint": "microsoftpowerpoint",
    "Adobe Illustrator": "adobeillustrator",
    "Adobe Premiere Pro": "adobepremierepro",
    "html": "html5",
    "HTML": "html5",
    "css": "css3",
    "CSS": "css3",
    "JavaScript": "javascript",
    "WordPress": "wordpress",
    "Figma": "figma",
    "Adobe Photoshop": "adobephotoshop",
    "Adobe After Effects": "adobeaftereffects",
    "Blender": "blender",
    "Cursor": "cursor",
    "Obsidian": "obsidian",
    "Microsoft Word": "microsoftword",
    "php": "php",
    "PHP": "php"
};

// 各アイコンの公式カラーコード
const iconColors = {
    "adobeillustrator": "#FF9A00",
    "adobephotoshop": "#31A8FF",
    "adobeaftereffects": "#9999FF",
    "adobepremierepro": "#9999FF",
    "css3": "#1572B6",
    "html5": "#E34F26",
    "javascript": "#F7DF1E",
    "figma": "#F24E1E",
    "wordpress": "#21759B",
    "blender": "#F5792A",
    "cursor": "#000000",
    "obsidian": "#483699",
    "line": "#00C300",
    "microsoftpowerpoint": "#D24726",
    "microsoftword": "#2B579A",
    "php": "#777BB4"
};

// カラーロゴのURLを生成
function getSoftwareLogoUrl(iconName) {
    // jsdelivr.netのsimple-iconsを使用（SVG形式）
    // カラーはCSSで適用するため、data属性にカラーコードを保存
    return `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`;
}

// アイコンのカラーコードを取得
function getIconColor(iconName) {
    return iconColors[iconName] || "#000000";
}

// カラーコードをCSSフィルターに変換（フォールバック用）
function getIconColorFilter(color) {
    // 簡易的なカラーフィルター（完全ではないが、フォールバック用）
    return '';
}

// ソフト名からロゴを取得（部分一致も対応）
function getSoftwareLogo(softwareName) {
    // 完全一致を優先
    if (softwareIconNames[softwareName]) {
        return getSoftwareLogoUrl(softwareIconNames[softwareName]);
    }
    // 部分一致で検索
    for (const [key, iconName] of Object.entries(softwareIconNames)) {
        if (softwareName.includes(key) || key.includes(softwareName)) {
            return getSoftwareLogoUrl(iconName);
        }
    }
    return null;
}

// 作品データ
const worksData = [
    {
        id: 1,
        title: "3Sections",
        type: "謎解き",
        description: "δ-としては初投稿の作品。友人に遊んでもらうために制作したものを、挑戦心からネットに公開しましたが、そこそこの反応をいただき、ここから謎解き制作に没頭していくこととなります。<br><br><a href=\"https://note.com/dminusriddle/n/ndbcce23ce02f\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["LINE", "Microsoft Powerpoint"],
        image: "images/3Sections.png",
        imageClickUrl: "https://lin.ee/yb2jZY8"
    },
    {
        id: 2,
        title: "3SectionsII",
        type: "謎解き",
        description: "3Sectionsの一周年記念で制作した作品。3SectionsIIまでの間の作品に寄せられた感想や、その他のインプットを経て、よりボリューミーに、高難度に進化した作品です。<br><br><a href=\"https://note.com/dminusriddle/n/n788710c8eb27\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["LINE", "Microsoft Powerpoint"],
        image: "images/3Sections2.png",
        imageClickUrl: "https://lin.ee/keRZRLS"
    },
    {
        id: 3,
        title: "二択の塔",
        type: "謎解き",
        description: "現実で作品を遊んでいただけるイベントがあると知り、知名度に不安を抱えながらも応募し、「リアルでやる意味」を意識して制作した作品。たくさんの方々にご来場いただき、結果的には代表作と呼べるような作品となりました。<br><br><a href=\"https://note.com/dminusriddle/n/nafa89e5c152f\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["Microsoft Powerpoint"],
        image: "images/Nitakunotou.png",
        imageClickUrl: "https://note.com/dminusriddle/n/nafa89e5c152f"
    },
    {
        id: 4,
        title: "もっと高く、もっと遠く",
        type: "謎解き",
        description: "二択の塔の成功を受けて、別の作品のアイデアが湧いたので制作した作品。イベント自体のテーマ「ライトに遊べる謎解き」と、自分自身の大切にしている「リアルでやる意味」を掛け合わせた結果、はちゃめちゃな作品になりました。<br><br><a href=\"https://note.com/dminusriddle/n/n4310acf691e3\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["Microsoft Powerpoint"],
        image: "images/HaF.png",
        imageClickUrl: "https://note.com/dminusriddle/n/n4310acf691e3"
    },
    {
        id: 5,
        title: "「秘密」",
        type: "映像",
        description: "大学の転学部転学科を経て、新しい学科にて一番最初に制作した、「秘密」をテーマにした作品。その時点で既に趣味だったカメラの写真をもとに、同じく趣味だった、自分で制作した音楽をつけて編集しました。",
        software: ["Adobe Illustrator", "Adobe Premiere Pro"],
        image: "https://via.placeholder.com/1200x800",
        videoUrl: "https://youtu.be/k5CaM2kJkGM"
    },
    {
        id: 6,
        title: "Lab.Real-01「Detach」",
        type: "謎解き",
        description: "「世の中で開催されている定員が6人の謎解き公演は、お店側の事情でしかない」という意見に対するアンチテーゼとして制作した作品。540枚の紙を60分以内に剥がすことが目的となる作品です。<br><br><a href=\"https://note.com/dminusriddle/n/ne9c27a959da7\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["Microsoft Powerpoint"],
        image: "images/Detach.png",
        imageClickUrl: "https://note.com/dminusriddle/n/ne9c27a959da7"
    },
    {
        id: 7,
        title: "「田畑先生 -今、伝えたいこと-」",
        type: "映像",
        description: "ドキュメンタリーを制作する課題にて、大学の先生にインタビューした作品。撮影、編集にて関わりました。",
        software: ["Adobe Premiere Pro"],
        image: "https://via.placeholder.com/1200x800",
        videoUrl: "https://youtu.be/J5Y8QXjKJko"
    },
    {
        id: 8,
        title: "ときのばし",
        type: "謎解き",
        description: "転科したことによって教わったデザインや、Webサイト周りの機能を活かしたいと思い、制作した作品。<a href=\"https://dminusriddle.site/tokinobashi/timer/\">延長が反映されるタイマー</a>や、<a href=\"https://dminusriddle.site/tokinobashi/randomquiz/\">公演で使用しているクイズ機能</a>は、JavaScriptを使用して制作しています。また、<a href=\"https://dminusriddle.site/tokinobashi/kaisetsu/\">解説サイト</a>を外部サービスに頼らず自分で作ってみることにも挑戦しました。",
        software: ["Adobe Illustrator", "html", "css", "JavaScript"],
        image: "images/Tokinobashi.png",
        imageClickUrl: "https://dminusriddle.site/tokinobashi/timer/"
    },
    {
        id: 9,
        title: "δ-Portal",
        type: "サイト",
        description: "WordPressを利用したサイトを制作するという課題がてら、自分の作品をまとめるサイトを作りたいという気持ちを叶えた作品。作品を選ぶのに必要な情報がシンプルにまとまるように心がけて制作しました。",
        software: ["WordPress"],
        image: "images/Portal.jpeg"
    },
    {
        id: 10,
        title: "「misdirection」",
        type: "映像",
        description: "フィクション作品を制作せよ、という課題で制作した作品。時折入る、ノイズの原因とは……？<br><br>演者、撮影、編集にて関わりました。",
        software: ["Adobe Premiere Pro"],
        image: "https://via.placeholder.com/1200x800",
        videoUrl: "https://youtu.be/V2qmi_rOvHI"
    },
    {
        id: 11,
        title: "「トイレトマップ」企画書",
        type: "企画書",
        description: "「スマホアプリのサービスを提案する企画書を作成しなさい」という課題にて作成した作品。既存のトイレマップの問題点に目を向け、レビュー機能やトイレピン機能等を提案しました。",
        software: ["Adobe Illustrator", "Figma"],
        image: "images/Toiretomap.png"
    },
    {
        id: 12,
        title: "「find out」",
        type: "映像",
        description: "「1シーケンス1ショット」という、シーンの切り替わりとカットの作り方を問う課題にて制作した作品です。<br>find out:見つける、発見する<br><br>演者、撮影、編集に関わりました。",
        software: ["Adobe Premiere Pro"],
        image: "https://via.placeholder.com/1200x800",
        videoUrl: "https://youtu.be/3l9GAW6_GOk"
    },
    {
        id: 13,
        title: "「SUSHI WARS」",
        type: "映像",
        description: "シナリオを映像化する課題で制作した作品。<br><br>シナリオ、演者、撮影にて関わりました。",
        software: ["Obsidian","Microsoft Word"],
        image: "https://via.placeholder.com/1200x800",
        videoUrl: "https://youtu.be/X5or-9E0lAw"
    },
    {
        id: 14,
        title: "ジョウホウカタ",
        type: "謎解き",
        description: "幼い頃から好きだった作品を含む複数の謎解きに1日で参加したことで閃いたアイデアに、公演を運営する中で溜まったフラストレーションを込めた、ある意味情熱的な作品です。<br><br><a href=\"https://note.com/dminusriddle/n/n2c522759a7ef?app_launch=false\">内容が知れる解説はこちらからご覧いただけます。</a>",
        software: ["Adobe Illustrator", "Adobe Photoshop", "Adobe After Effects", "Adobe Premiere Pro", "LINE"],
        image: "images/Jouhoukata.webp",
        imageClickUrl: "https://note.com/dminusriddle/n/n2c522759a7ef?app_launch=false"
    },
    {
        id: 15,
        title: "二択の間",
        type: "謎解き",
        description: "これまでリアル公演でお世話になっていたイベントの母体がなくなるということで、リアル公演の原点である「二択の塔」の続編となる作品を制作。当日遊びに来てくださった方々のみの記憶に残って欲しいという思いから、解説などは一切公開していません。",
        software: ["Adobe Illustrator", "Adobe Photoshop", "Blender"],
        image: "images/Nitakunoma.webp"
    },
    {
        id: 16,
        title: "DATE",
        type: "謎解き",
        description: "ゼミ制作として、今勢いを強めているVibe Codingで制作した作品。<br><br><a href=\"https://note.com/dminusriddle/n/n06e192bdf985\">制作後記</a>も読めます。",
        software: ["Cursor","Obsidian","html","css","JavaScript"],
        image: "images/DATE.png",
        imageClickUrl: "https://dminusriddle.site/DATE/"
    },
    {
        id: 17,
        title: "δ-Lab",
        type: "謎解き",
        description: "3Sectionsの成功以後、LINEを使用して思いつきを形にしていた連作「δ-Lab」シリーズを、Webで遊べるように移植した作品。",
        software: ["Cursor", "Obsidian", "html", "php", "css", "JavaScript", "Adobe Illustrator"],
        image: "images/Lab.png",
        imageClickUrl: "https://dminusriddle.site/DminusLab/"
    }
];

let currentIndex = 0;

// URLパラメータから作品IDを取得
function getWorkIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    if (!id) return 0;
    
    // IDで作品を検索
    const index = worksData.findIndex(work => work.id === id);
    return index >= 0 ? index : 0;
}

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

// YouTube URLを埋め込み用URLに変換
function convertToEmbedUrl(url) {
    if (!url) return '';
    const videoId = extractVideoId(url);
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    // すでに埋め込み用URLの場合
    if (url.includes('youtube.com/embed/')) {
        return url;
    }
    return url;
}

// YouTubeのサムネイルURLを生成
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

// 動画サムネイルを取得（手動指定 > YouTube自動取得）
async function getVideoThumbnail(work) {
    // 手動でサムネイルが指定されている場合はそれを使用
    if (work.thumbnail) {
        return work.thumbnail;
    }
    
    // YouTubeのサムネイルを試みる
    if (work.videoUrl) {
        const videoId = extractVideoId(work.videoUrl);
        if (videoId) {
            // まず高解像度を試す
            const thumbnailUrl = getYouTubeThumbnail(videoId, 'maxresdefault');
            const isAvailable = await testImageLoad(thumbnailUrl);
            
            if (isAvailable) {
                return thumbnailUrl;
            } else {
                // 高解像度が失敗した場合は標準解像度を試す
                const standardThumbnail = getYouTubeThumbnail(videoId, 'hqdefault');
                const isStandardAvailable = await testImageLoad(standardThumbnail);
                
                if (isStandardAvailable) {
                    return standardThumbnail;
                }
            }
        }
    }
    
    // どちらも失敗した場合は元の画像を返す
    return work.image;
}

// 作品を表示
async function displayWork(index) {
    if (index < 0 || index >= worksData.length) return;
    
    currentIndex = index;
    const work = worksData[index];
    
    document.getElementById('detailTitle').textContent = work.title;
    document.getElementById('detailType').textContent = work.type;
    // 説明はHTMLとして表示（リンクなどを含められる）
    const description = work.description || '作品の詳細な説明がここに表示されます。';
    // 既に<p>タグが含まれている場合はそのまま、含まれていない場合は<p>で囲む
    if (description.trim().startsWith('<')) {
        document.getElementById('detailDescription').innerHTML = description;
    } else {
        document.getElementById('detailDescription').innerHTML = `<p>${description}</p>`;
    }
    
    // 使用ソフトのロゴを表示
    const softwareLogosContainer = document.getElementById('softwareLogos');
    softwareLogosContainer.innerHTML = '';
    
    // softwareが配列の場合
    const softwareList = Array.isArray(work.software) ? work.software : [work.software];
    
    // 「（後で記入）」を除外して有効なソフトのみをフィルタリング
    const validSoftwareList = softwareList.filter(softwareName => 
        softwareName && softwareName !== '（後で記入）'
    );
    
    // ロゴを非同期で読み込む（Promiseの配列を作成）
    const logoPromises = validSoftwareList.map(async (softwareName) => {
        const iconName = softwareIconNames[softwareName] || 
            Object.entries(softwareIconNames).find(([key]) => 
                softwareName.includes(key) || key.includes(softwareName)
            )?.[1];
        
        if (iconName) {
            const softwareItem = document.createElement('div');
            softwareItem.className = 'software-item';
            
            try {
                // SVGを取得してカラーを適用
                const svgUrl = `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${iconName}.svg`;
                const response = await fetch(svgUrl);
                
                if (response.ok) {
                    let svgText = await response.text();
                    const iconColor = getIconColor(iconName);
                    
                    // SVGのfill属性をカラーに変更
                    svgText = svgText.replace(/fill="[^"]*"/g, `fill="${iconColor}"`);
                    // fill属性がない場合は追加
                    if (!svgText.includes('fill=')) {
                        svgText = svgText.replace('<svg', `<svg fill="${iconColor}"`);
                    }
                    
                    // SVGをインラインで表示
                    softwareItem.innerHTML = svgText;
                    softwareItem.querySelector('svg').setAttribute('class', 'software-logo');
                    softwareItem.querySelector('svg').setAttribute('width', '32');
                    softwareItem.querySelector('svg').setAttribute('height', '32');
                    softwareItem.querySelector('svg').setAttribute('viewBox', '0 0 24 24');
                    
                    return softwareItem;
                } else {
                    // フォールバック: imgタグで表示
                    const img = document.createElement('img');
                    img.src = svgUrl;
                    img.alt = softwareName;
                    img.className = 'software-logo';
                    img.style.filter = `brightness(0) saturate(100%) ${getIconColorFilter(iconColor)}`;
                    img.onerror = () => {
                        softwareItem.style.display = 'none';
                    };
                    softwareItem.appendChild(img);
                    return softwareItem;
                }
            } catch (error) {
                // エラー時はnullを返す
                console.warn(`Failed to load logo for ${softwareName}:`, error);
                return null;
            }
        }
        return null;
    });
    
    // すべてのロゴの読み込みが完了するまで待つ
    const logoItems = await Promise.all(logoPromises);
    
    // 有効なロゴのみを追加
    logoItems.forEach(item => {
        if (item) {
            softwareLogosContainer.appendChild(item);
        }
    });
    
    // ロゴが1つも表示されなかった場合でも、「（後で記入）」は表示しない
    // （有効なソフトがない場合は何も表示しない）
    
    // 動画がある場合は動画を表示、ない場合は画像を表示
    const imageContainer = document.getElementById('detailImageContainer');
    const imageElement = document.getElementById('detailImage');
    const videoContainer = document.getElementById('detailVideo');
    const videoIframe = document.getElementById('videoIframe');
    
    // 二択の塔（id: 3）の場合は縦向き表示
    if (work.id === 3) {
        imageContainer.classList.add('portrait');
    } else {
        imageContainer.classList.remove('portrait');
    }
    
    if (work.videoUrl) {
        // 動画を表示
        imageElement.style.display = 'none';
        videoContainer.style.display = 'block';
        videoIframe.src = convertToEmbedUrl(work.videoUrl);
        // 動画の場合は画像クリックリンクを削除
        imageElement.onclick = null;
        imageElement.style.cursor = 'default';
        imageElement.style.pointerEvents = 'none';
    } else {
        // 画像を表示
        imageElement.style.display = 'block';
        videoContainer.style.display = 'none';
        imageElement.src = work.image;
        imageElement.alt = work.title;
        videoIframe.src = ''; // 動画を停止
        
        // 画像クリック時のリンク処理
        if (work.imageClickUrl) {
            imageElement.style.cursor = 'pointer';
            imageElement.onclick = () => {
                window.open(work.imageClickUrl, '_blank');
            };
        } else {
            imageElement.onclick = null;
            imageElement.style.cursor = 'default';
            imageElement.style.pointerEvents = 'auto';
        }
    }
    
    // URLを更新（履歴に追加しない）
    const newUrl = `detail.html?id=${work.id}`;
    window.history.replaceState({}, '', newUrl);
    
    // サムネイルのアクティブ状態を更新
    updateThumbnails();
}

// 前の作品
function showPrevWork() {
    if (currentIndex > 0) {
        displayWork(currentIndex - 1);
    } else {
        displayWork(worksData.length - 1);
    }
}

// 次の作品
function showNextWork() {
    if (currentIndex < worksData.length - 1) {
        displayWork(currentIndex + 1);
    } else {
        displayWork(0);
    }
}

// サムネイルを生成
async function generateThumbnails() {
    const container = document.getElementById('detailThumbnails');
    container.innerHTML = '';
    
    for (let index = 0; index < worksData.length; index++) {
        const work = worksData[index];
        const thumbnailUrl = await getVideoThumbnail(work);
        
        const thumbnail = document.createElement('div');
        thumbnail.className = 'detail-thumbnail';
        thumbnail.innerHTML = `<img src="${thumbnailUrl}" alt="${work.title}">`;
        thumbnail.addEventListener('click', () => displayWork(index));
        container.appendChild(thumbnail);
    }
}

// サムネイルのアクティブ状態を更新
function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.detail-thumbnail');
    thumbnails.forEach((thumb, index) => {
        if (index === currentIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    const initialIndex = getWorkIdFromUrl();
    displayWork(initialIndex);
    generateThumbnails();
    
    document.getElementById('prevBtn').addEventListener('click', showPrevWork);
    document.getElementById('nextBtn').addEventListener('click', showNextWork);
    
    // キーボードナビゲーション
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            showPrevWork();
        } else if (e.key === 'ArrowRight') {
            showNextWork();
        }
    });
});
