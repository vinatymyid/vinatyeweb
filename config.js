
// Wellcome Here you can Configure your Site with Ease 

export let yourServerName = "vinaty"; // Change this to Your Server name
let yourDiscordLink = "https://discord.gg/eYbFBqmjUU"; // Your Discord Link (Make sure to include https://)
let yourSupportEmail = "vinatynetwork@outlook.com"; // Your Support Email 
export let ServerIP = "vinaty.my.id"; // Your Server IP



export const staffData = {
    "Owner": ["sxzmil"], // Put your staff members username in respected place
    "Manager/Dev": ["gubnnna"],    // If you leave a rank empty it won't be displayed
    "Admin": ["firgun"],
    "JrAdmin": [],
    "SrMod": [],
    "Mod+": [],
    "Mod": [],
    "Helper": ["Notch"]
};

// Rank colors (modifiable)
export const rankColors = {
    "Owner": "#e74c3c",  // Here you can change the color of the ranks with ease
    "Manager": "#f39c12",
    "Admin": "#3498db",
    "JrAdmin": "#9b59b6",
    "SrMod": "#1abc9c",
    "Mod+": "#27ae60",
    "Mod": "#2ecc71",
    "Helper": "#95a5a6"
};



// You can add as much rules as you want, but make sure to keep the format the same

export const rules = {
    serverName: "Vinaty",
    rulesList: [
        {
            rule: "No cheating atau hacking.",
            details: "Menggunakan perangkat lunak pihak ketiga untuk mendapatkan keuntungan yang tidak adil adalah dilarang.",
            punishment: "Permanent ban."
        },
        {
            rule: "Bersikaplah hormat kepada pemain lain.",
            details: "Toksisitas, pelecehan, atau perundungan tidak akan ditoleransi.",
            punishment: "Warning → Mute → Temporary ban."
        },
        {
            rule: "No spamming di chat.",
            details: "Hindari mengirim pesan yang berlebihan, huruf kapital, atau perintah yang diulang.",
            punishment: "Mute for 30 minutes → Longer mute for repeat offenses."
        },
        {
            rule: "Jangan mengeksploitasi bug atau kesalahan.",
            details: "Jika Anda menemukan bug, laporkanlah daripada menyalahgunakannya.",
            punishment: "Temporary ban → Permanent ban if repeated."
        },
        {
            rule: "Tidak ada bahasa ofensif atau pelecehan.",
            details: "Ujaran kebencian, kata-kata kasar, atau ancaman akan mengakibatkan hukuman.",
            punishment: "Immediate mute → Ban for severe cases."
        },
        {
            rule: "Ikuti petunjuk staf setiap saat.",
            details: "Tidak menghormati staf dapat mengakibatkan hukuman.",
            punishment: "Warning → Kick → Temporary ban."
        },
        {
            rule: "Tidak ada iklan server lain.",
            details: "Mempromosikan server lain di obrolan atau DM tidak diperbolehkan.",
            punishment: "Immediate mute → Ban for repeated offenses."
        },
        {
            rule: "Jangan menggunakan nama pengguna atau skin yang tidak pantas.",
            details: "di larang mengunakan nama yang tidak sopan atau skin yang tidak sopan",
            punishment: "Kick → Ban if not changed."
        }
    ]
};



export const faq = {
    sectionTitle: "Frequently Asked Questions",
    questionsList: [
        {
            question: "Bagaimana cara saya bergabung dengan server?",
            answer: "Gunakan kami server IP: <code>vinaty.my.id/code> di klien Minecraft Anda."
        },
        {
            question: "What version does the server support?",
            answer: "Kami mendukung Minecraft Java Edition 1.8 - 1.21.5 (disarankan 1.21+) dan yang lebih baru."
        },
        {
            question: "Bagaimana saya bisa menjadi anggota staf?",
            answer: "Lamar di server Discord kami ketika perekrutan dibuka. Anda perlu menjadi anggota aktif selama setidaknya 1 bulan."
        },
        {
            question: "Apakah ada barang yang dilarang?",
            answer: "Periksa saluran #server-info di Discord kami untuk daftar item yang dibatasi saat ini."
        },
        {
            question: "Bagaimana cara melaporkan seorang pemain?",
            answer: "Gunakan <code>/report <pemain> <alasan></code> di dalam game atau buat tiket di Discord."
        }
        
    ]
};



// -------------------------------------------------------------------------------------------------------

// Don't change anything Here!

let discordDisplayText = yourDiscordLink.replace(/^https?:\/\//, "");


function updateServerName() {
    document.querySelectorAll(".config-server-name").forEach(el => {
        el.textContent = yourServerName;
    });
}

updateServerName();


function updateDiscordButton() {
    document.querySelectorAll(".config-discord-btn").forEach(el => {
        el.href = yourDiscordLink;
    });
}

updateDiscordButton();

function updateDiscordFooter() {
    document.querySelector(".config-support-email").innerHTML = 
        `<i class="fas fa-envelope"></i> ${yourSupportEmail}`;

    let footerElement = document.querySelector(".config-discord-footer");
    footerElement.innerHTML = `<i class="fab fa-discord"></i> <a href="${yourDiscordLink}" target="_blank">${discordDisplayText}</a>`;
}

updateDiscordFooter();
