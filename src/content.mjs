// Landing copy. Indonesian is the primary locale; English is secondary.
// WhatsApp: set WHATSAPP_NUMBER to an international number without "+" (e.g. 6281234567890).
export const WHATSAPP_NUMBER = ''; // TODO: owner to provide
export const WHATSAPP_DISPLAY = '+62 8xx-xxxx-xxxx';

export const locales = {
  id: {
    lang: 'id',
    path: '/',
    altPath: '/en/',
    altLabel: 'EN',
    title: 'Loyaa — Kartu loyalitas digital di Apple & Google Wallet',
    description:
      'Buat kartu stempel atau poin untuk pelanggan setia Anda. Tanpa aplikasi, tanpa kartu kertas. Siap dalam hitungan menit.',
    nav: { how: 'Cara kerja', features: 'Fitur', pricing: 'Harga', faq: 'FAQ', cta: 'Coba gratis' },
    hero: {
      eyebrow: 'Untuk kafe, salon, toko & UMKM',
      h1: 'Kartu loyalitas digital. <em>Tanpa aplikasi.</em>',
      sub: 'Pelanggan cukup scan QR, kartu Anda langsung tersimpan di Apple Wallet atau Google Wallet. Kasir scan, stempel & poin bertambah otomatis.',
      cta1: 'Chat via WhatsApp',
      cta2: 'Lihat cara kerja',
      note: 'Pilot terbatas di Indonesia · Siap dalam 10 menit',
    },
    card: { name: 'Kopi Senja', stamps: '7 dari 10 stempel', next: '3 lagi untuk kopi gratis' },
    problem: {
      h2: 'Kartu fisik mudah hilang atau lupa dibawa.',
      p: 'Dengan Loyaa, kartu loyalitas ada di tempat yang selalu dibawa pelanggan: ponsel mereka. Anda tahu siapa yang kembali, dan mereka punya alasan untuk datang lagi.',
      stats: [
        ['0', 'aplikasi yang perlu diunduh'],
        ['60 detik', 'pelanggan daftar & dapat kartu'],
        ['3 ketuk', 'kasir selesaikan satu transaksi'],
      ],
    },
    how: {
      h2: 'Tiga langkah, selesai.',
      steps: [
        ['Pelanggan scan QR', 'Daftar lewat WhatsApp atau Google dalam hitungan detik. Kartu masuk ke Apple/Google Wallet.'],
        ['Kasir scan kartu', 'Buka aplikasi kasir Loyaa di ponsel atau tablet. Foto struk, masukkan nominal, konfirmasi.'],
        ['Stempel & poin masuk', 'Kartu pelanggan langsung diperbarui. Hadiah ditukar dalam sekali scan.'],
      ],
    },
    features: {
      h2: 'Semua yang dibutuhkan toko kecil.',
      items: [
        ['Kartu Stempel', 'Beli 9, gratis yang ke-10. Klasik dan mudah dipahami pelanggan.'],
        ['Sistem Poin', 'Poin dari setiap rupiah belanja, tukar dengan katalog hadiah Anda.'],
        ['Tampilan sesuai brand', 'Logo, warna, bentuk kartu, dan stempel sendiri. Terlihat seperti toko Anda.'],
        ['Aplikasi kasir', 'Scan, foto struk, konfirmasi. Dirancang untuk satu tangan di jam sibuk.'],
        ['Anti-curang', 'Foto struk wajib, batas waktu antar transaksi, dan jejak audit untuk manajer.'],
        ['Tanpa unduh', 'Pelanggan memakai Apple Wallet, Google Wallet, atau web. Tanpa aplikasi baru.'],
      ],
    },
    custom: {
      h2: 'Kartunya terlihat seperti toko Anda.',
      p: 'Pilih warna, logo, dan stempel. Pratinjau langsung sebelum diterbitkan.',
      themes: ['Kafe', 'Salon', 'Bakeri'],
    },
    who: { h2: 'Cocok untuk', chips: ['Kafe & kedai kopi', 'Bakeri', 'Salon & spa', 'Toko butik', 'Restoran kecil', 'Barbershop'] },
    pricing: {
      h2: 'Harga sederhana.',
      p: 'Tanpa biaya setup. Batalkan kapan saja.',
      plans: [
        {
          name: 'Standalone',
          price: 'Rp 399.000',
          per: '/bulan',
          feats: ['Aplikasi kasir + foto struk', 'Kartu Stempel & Sistem Poin', 'Apple Wallet, Google Wallet & web', 'Dukungan via WhatsApp'],
          cta: 'Mulai pilot',
          highlight: true,
        },
        {
          name: 'Terintegrasi POS',
          price: 'Rp 1.499.000',
          per: '/bulan',
          feats: ['Semua di Standalone', 'Poin otomatis dari kasir POS', 'Tanpa langkah manual kasir', 'Dukungan prioritas'],
          cta: 'Segera hadir',
          soon: true,
        },
      ],
    },
    faq: {
      h2: 'Pertanyaan umum',
      items: [
        ['Apakah pelanggan harus mengunduh aplikasi?', 'Tidak. Kartu disimpan di Apple Wallet atau Google Wallet bawaan ponsel, atau dibuka lewat web.'],
        ['Berapa lama setup-nya?', 'Biasanya sekitar 10 menit: pilih jenis kartu, unggah logo, atur hadiah, lalu terbitkan.'],
        ['Bagaimana data pelanggan dilindungi?', 'Kami meminta persetujuan eksplisit, menyimpan data seminimal mungkin, dan mengikuti UU Pelindungan Data Pribadi (UU PDP).'],
        ['Apakah bisa terhubung ke kasir POS?', 'Integrasi POS (mis. Moka) sedang disiapkan. Saat ini Anda bisa mulai dengan paket Standalone.'],
        ['Bagaimana mencegah kecurangan?', 'Setiap transaksi butuh foto struk, ada jeda antar transaksi, dan manajer bisa membatalkan transaksi yang mencurigakan.'],
      ],
    },
    cta: {
      h2: 'Mau coba di toko Anda?',
      p: 'Kami sedang membuka pilot terbatas di Indonesia. Tinggalkan nomor WhatsApp, kami hubungi Anda.',
      form: { name: 'Nama Anda', biz: 'Nama usaha', wa: 'Nomor WhatsApp', city: 'Kota', type: 'Jenis usaha', types: ['Kafe / F&B', 'Salon / spa', 'Toko retail', 'Lainnya'], consent: 'Saya setuju data saya digunakan untuk dihubungi tentang Loyaa.', submit: 'Kirim', thanks: 'Terima kasih! Kami akan menghubungi Anda lewat WhatsApp.' },
      or: 'atau chat langsung',
      wa: 'Chat via WhatsApp',
    },
    footer: { rights: '© 2026 Loyaa. Semua hak dilindungi.', privacy: 'Kebijakan Privasi', terms: 'Syarat & Ketentuan', contact: 'Hubungi kami' },
  },
  en: {
    lang: 'en',
    path: '/en/',
    altPath: '/',
    altLabel: 'ID',
    title: 'Loyaa — Digital loyalty cards in Apple & Google Wallet',
    description:
      'Stamp or points cards for your regulars. No app to download, no paper cards. Set up in minutes.',
    nav: { how: 'How it works', features: 'Features', pricing: 'Pricing', faq: 'FAQ', cta: 'Try it free' },
    hero: {
      eyebrow: 'For cafés, salons, shops & small businesses',
      h1: 'Digital loyalty cards. <em>No app needed.</em>',
      sub: 'Customers scan a QR and your card lands in Apple Wallet or Google Wallet. Your cashier scans, stamps and points update automatically.',
      cta1: 'Chat on WhatsApp',
      cta2: 'See how it works',
      note: 'Limited pilot in Indonesia · Ready in 10 minutes',
    },
    card: { name: 'Kopi Senja', stamps: '7 of 10 stamps', next: '3 more for a free coffee' },
    problem: {
      h2: 'Physical cards get lost or left at home.',
      p: 'With Loyaa the loyalty card lives where customers always are: their phone. You see who comes back, and they have a reason to return.',
      stats: [
        ['0', 'apps to download'],
        ['60 sec', 'for a customer to join'],
        ['3 taps', 'for a cashier to finish a sale'],
      ],
    },
    how: {
      h2: 'Three steps. Done.',
      steps: [
        ['Customer scans a QR', 'Sign up with WhatsApp or Google in seconds. The card goes into Apple/Google Wallet.'],
        ['Cashier scans the card', 'Open the Loyaa cashier app on a phone or tablet. Snap the receipt, enter the amount, confirm.'],
        ['Stamps & points land', 'The customer\'s card updates instantly. Rewards are redeemed with one scan.'],
      ],
    },
    features: {
      h2: 'Everything a small shop needs.',
      items: [
        ['Stamp Card', 'Buy 9, get the 10th free. Classic and instantly understood.'],
        ['Points System', 'Earn points on every rupiah spent, redeem from your reward catalog.'],
        ['On-brand design', 'Your logo, colours, card shape and custom stamps. It looks like your shop.'],
        ['Cashier app', 'Scan, snap the receipt, confirm. Built for one hand at rush hour.'],
        ['Fraud guard', 'Mandatory receipt photo, cooldowns between visits and an audit trail for managers.'],
        ['No download', 'Customers use Apple Wallet, Google Wallet or the web. No new app.'],
      ],
    },
    custom: {
      h2: 'The card looks like your shop.',
      p: 'Pick colours, logo and stamps. Preview live before you publish.',
      themes: ['Café', 'Salon', 'Bakery'],
    },
    who: { h2: 'Built for', chips: ['Cafés & coffee carts', 'Bakeries', 'Salons & spas', 'Boutiques', 'Small restaurants', 'Barbershops'] },
    pricing: {
      h2: 'Simple pricing.',
      p: 'No setup fee. Cancel anytime.',
      plans: [
        {
          name: 'Standalone',
          price: 'Rp 399,000',
          per: '/month',
          feats: ['Cashier app + receipt photo', 'Stamp Card & Points System', 'Apple Wallet, Google Wallet & web', 'WhatsApp support'],
          cta: 'Join the pilot',
          highlight: true,
        },
        {
          name: 'POS Integrated',
          price: 'Rp 1,499,000',
          per: '/month',
          feats: ['Everything in Standalone', 'Automatic points from your POS', 'Zero manual cashier steps', 'Priority support'],
          cta: 'Coming soon',
          soon: true,
        },
      ],
    },
    faq: {
      h2: 'Common questions',
      items: [
        ['Do customers need to download an app?', 'No. The card lives in the phone\'s built-in Apple Wallet or Google Wallet, or opens on the web.'],
        ['How long does setup take?', 'Usually about 10 minutes: pick a card type, upload your logo, set rewards, publish.'],
        ['How is customer data protected?', 'We ask for explicit consent, store as little as possible and follow Indonesia\'s Personal Data Protection Law (UU PDP).'],
        ['Does it connect to my POS?', 'POS integration (e.g. Moka) is in development. Today you can start with the Standalone plan.'],
        ['How do you prevent fraud?', 'Every sale needs a receipt photo, visits have a cooldown, and managers can reverse suspicious transactions.'],
      ],
    },
    cta: {
      h2: 'Want to try it in your shop?',
      p: 'We are opening a limited pilot in Indonesia. Leave your WhatsApp number and we will reach out.',
      form: { name: 'Your name', biz: 'Business name', wa: 'WhatsApp number', city: 'City', type: 'Business type', types: ['Café / F&B', 'Salon / spa', 'Retail shop', 'Other'], consent: 'I agree my details may be used to contact me about Loyaa.', submit: 'Send', thanks: 'Thank you! We will contact you on WhatsApp.' },
      or: 'or chat directly',
      wa: 'Chat on WhatsApp',
    },
    footer: { rights: '© 2026 Loyaa. All rights reserved.', privacy: 'Privacy Policy', terms: 'Terms', contact: 'Contact us' },
  },
};
