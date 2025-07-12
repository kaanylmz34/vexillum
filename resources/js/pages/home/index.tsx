import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const Home = () => {
    const [activeTab, setActiveTab] = useState('satilik');
    const [activeCategory, setActiveCategory] = useState('konut');
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [showFilters, setShowFilters] = useState(false);
    const [searchFilters, setSearchFilters] = useState({
        il: '',
        ilce: '',
        mahalle: '',
        tip: '',
        odaSayisi: '',
        minFiyat: '',
        maxFiyat: '',
        minM2: '',
        maxM2: '',
        minYas: '',
        maxYas: '',
        kat: '',
        isitma: '',
        banyoSayisi: '',
        balkonVar: false,
        asansorVar: false,
        parkingVar: false,
        esyaliMi: false,
        siteMi: false,
        krediyeUygun: false
    });

    const megaMenuCategories = {
        konut: {
            title: 'Konut',
            subcategories: [
                { name: 'Daire', count: '1.2M', icon: '🏠' },
                { name: 'Villa', count: '180K', icon: '🏡' },
                { name: 'Müstakil Ev', count: '95K', icon: '🏘️' },
                { name: 'Farmhouse', count: '12K', icon: '🏞️' },
                { name: 'Çiftlik Evi', count: '8K', icon: '🚜' },
                { name: 'Yazlık', count: '45K', icon: '🏖️' }
            ]
        },
        isyeri: {
            title: 'İşyeri',
            subcategories: [
                { name: 'Ofis', count: '85K', icon: '🏢' },
                { name: 'Dükkan', count: '125K', icon: '🏪' },
                { name: 'Depo', count: '35K', icon: '📦' },
                { name: 'Fabrika', count: '8K', icon: '🏭' },
                { name: 'Atölye', count: '15K', icon: '🔧' },
                { name: 'Showroom', count: '5K', icon: '🎪' }
            ]
        },
        arsa: {
            title: 'Arsa',
            subcategories: [
                { name: 'Konut Arsası', count: '65K', icon: '🏗️' },
                { name: 'Ticari Arsa', count: '25K', icon: '🏬' },
                { name: 'Sanayi Arsası', count: '12K', icon: '🏭' },
                { name: 'Tarla', count: '85K', icon: '🌾' },
                { name: 'Bağ & Bahçe', count: '45K', icon: '🍇' },
                { name: 'Orman', count: '8K', icon: '🌲' }
            ]
        }
    };

    const pricesTrends = [
        { city: 'İstanbul', avgPrice: '4.2M', change: '+12.5%', trend: 'up' },
        { city: 'Ankara', avgPrice: '2.1M', change: '+8.3%', trend: 'up' },
        { city: 'İzmir', avgPrice: '2.8M', change: '+15.2%', trend: 'up' },
        { city: 'Bursa', avgPrice: '1.9M', change: '+6.8%', trend: 'up' },
        { city: 'Antalya', avgPrice: '3.1M', change: '+18.7%', trend: 'up' }
    ];

    const featuredProperties = [
        {
            id: 1,
            title: "Nişantaşı Merkez Konumda Ultra Lüks 4+1 Daire",
            price: "15.750.000",
            location: "Nişantaşı, Şişli, İstanbul",
            neighborhood: "Teşvikiye Mah.",
            type: "Daire",
            rooms: "4+1",
            area: "220",
            netArea: "185",
            floor: "8/15",
            age: "2",
            heating: "Merkezi",
            balcony: "3",
            bathroom: "3",
            features: ["Asansör", "Kapalı Otopark", "Güvenlik", "Spor Salonu", "Yüzme Havuzu"],
            images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
            isVip: true,
            isUrgent: false,
            date: "2 saat önce",
            views: "1.2K",
            pricePerM2: "71.590",
            ownerType: "Emlak Ofisi",
            ownerName: "Prestij Emlak",
            phone: "0212 XXX XXXX",
            virtualTour: true,
            creditEligible: true,
            furnished: false,
            inSite: true,
            nearbyPlaces: ["Metro: 200m", "Hastane: 500m", "Okul: 300m", "AVM: 1km"],
            description: "Nişantaşı'nın en prestijli sokağında, A+ kalite yapım..."
        },
        {
            id: 2,
            title: "Bebek Boğaz Manzaralı Eşsiz Konumda Villa",
            price: "45.000.000",
            location: "Bebek, Beşiktaş, İstanbul",
            neighborhood: "Bebek Mah.",
            type: "Villa",
            rooms: "6+3",
            area: "650",
            netArea: "580",
            floor: "Villa",
            age: "5",
            heating: "Kombi",
            balcony: "4",
            bathroom: "5",
            features: ["Boğaz Manzarası", "Bahçe", "Güvenlik", "Jeneratör", "Şömine"],
            images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
            isVip: true,
            isUrgent: true,
            date: "3 saat önce",
            views: "2.8K",
            pricePerM2: "69.230",
            ownerType: "Sahibi",
            ownerName: "Ahmet Bey",
            phone: "0532 XXX XXXX",
            virtualTour: true,
            creditEligible: false,
            furnished: true,
            inSite: false,
            nearbyPlaces: ["Sahil: 50m", "Restoran: 100m", "Park: 200m", "Marina: 300m"],
            description: "Bebek'te eşsiz konumda, boğaz manzaralı..."
        },
        {
            id: 3,
            title: "Zorlu Center Karşısı Prestijli Ofis Katı",
            price: "12.500.000",
            location: "Levent, Beşiktaş, İstanbul",
            neighborhood: "Levent Mah.",
            type: "Ofis",
            rooms: "Açık Plan",
            area: "380",
            netArea: "340",
            floor: "12/25",
            age: "1",
            heating: "VRV",
            balcony: "0",
            bathroom: "2",
            features: ["Klimakar", "Jeneratör", "Güvenlik", "Otopark", "Kafeterya"],
            images: ["/api/placeholder/400/300", "/api/placeholder/400/300", "/api/placeholder/400/300"],
            isVip: false,
            isUrgent: false,
            date: "5 saat önce",
            views: "890",
            pricePerM2: "32.894",
            ownerType: "Kurumsal",
            ownerName: "İş Merkezi A.Ş.",
            phone: "0212 XXX XXXX",
            virtualTour: false,
            creditEligible: true,
            furnished: false,
            inSite: true,
            nearbyPlaces: ["Metro: 100m", "AVM: 50m", "Banka: 200m", "Restoran: 150m"],
            description: "Levent'te A+ ofis binasında..."
        }
    ];

    const advisors = [
        {
            id: 1,
            name: "Mehmet Özkan",
            title: "Emlak Danışmanı",
            experience: "12 yıl",
            rating: 4.9,
            reviews: 245,
            photo: "/api/placeholder/150/150",
            specialties: ["Lüks Konut", "Yatırım", "Ticari"],
            phone: "0532 XXX XXXX",
            online: true
        },
        {
            id: 2,
            name: "Ayşe Demir",
            title: "Senior Emlak Uzmanı",
            experience: "8 yıl",
            rating: 4.8,
            reviews: 189,
            photo: "/api/placeholder/150/150",
            specialties: ["Aile Konutu", "İlk Ev", "Kredi"],
            phone: "0533 XXX XXXX",
            online: false
        },
        {
            id: 3,
            name: "Can Yılmaz",
            title: "Gayrimenkul Uzmanı",
            experience: "15 yıl",
            rating: 4.9,
            reviews: 312,
            photo: "/api/placeholder/150/150",
            specialties: ["Villa", "Arsa", "Proje"],
            phone: "0534 XXX XXXX",
            online: true
        }
    ];

    const blogPosts = [
        {
            id: 1,
            title: "2024 Yılında Emlak Piyasası Nasıl Şekilleniyor?",
            excerpt: "Uzmanlar emlak piyasasının geleceği hakkında önemli değerlendirmelerde bulundu...",
            author: "Dr. Ekonomist Ali Vural",
            date: "2 gün önce",
            readTime: "5 dakika",
            image: "/api/placeholder/300/200",
            category: "Piyasa Analizi",
            tags: ["Emlak", "Piyasa", "2024", "Trend"]
        },
        {
            id: 2,
            title: "Ev Alırken Dikkat Edilmesi Gereken 15 Önemli Nokta",
            excerpt: "Hayatınızın en büyük yatırımını yaparken bu ipuçları size rehberlik edecek...",
            author: "Emlak Uzmanı Fatma Kaya",
            date: "1 hafta önce",
            readTime: "8 dakika",
            image: "/api/placeholder/300/200",
            category: "Rehber",
            tags: ["Ev Alma", "Rehber", "İpuçları"]
        },
        {
            id: 3,
            title: "Konut Kredisi Faiz Oranları ve Güncel Kampanyalar",
            excerpt: "Bankalar tarafından sunulan en güncel konut kredisi oranları ve avantajları...",
            author: "Finans Uzmanı Murat Tan",
            date: "3 gün önce",
            readTime: "6 dakika",
            image: "/api/placeholder/300/200",
            category: "Finans",
            tags: ["Kredi", "Faiz", "Banka", "Kampanya"]
        }
    ];

    const testimonials = [
        {
            id: 1,
            name: "Zeynep Aktaş",
            role: "Ev Sahibi",
            rating: 5,
            comment: "EmlakPro sayesinde hayallerimin evini çok kısa sürede buldum. Emlak danışmanım son derece profesyoneldi.",
            location: "İstanbul",
            date: "2 ay önce",
            photo: "/api/placeholder/80/80"
        },
        {
            id: 2,
            name: "Okan Demir",
            role: "Yatırımcı",
            rating: 5,
            comment: "Yatırım amaçlı aldığım dairenin değeri 6 ayda %15 arttı. Doğru tercih yapmama yardımcı oldular.",
            location: "Ankara",
            date: "4 ay önce",
            photo: "/api/placeholder/80/80"
        },
        {
            id: 3,
            name: "Elif Çetin",
            role: "İlk Ev Sahibi",
            rating: 5,
            comment: "İlk evimi alırken çok endişeliydim. Ekip bana her konuda destek oldu, kredi sürecinde yanımda oldular.",
            location: "İzmir",
            date: "1 ay önce",
            photo: "/api/placeholder/80/80"
        }
    ];

    return (
        <>
            <Head title="Anasayfa - Türkiye'nin En Büyük Emlak Platformu | EmlakPro" />
            
            {/* Top Notification Bar */}
            <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
                <span className="font-medium">🎉 Yeni Yıl Kampanyası!</span> 
                <span className="ml-2">İlan verene 3 ay ücretsiz vitrin! </span>
                <a href="#" className="ml-2 underline font-medium">Detaylar →</a>
            </div>

            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-10 text-sm">
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
                                <span className="mr-1">❓</span>Yardım
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
                                <span className="mr-1">📞</span>İletişim
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
                                <span className="mr-1">📱</span>Mobil Uygulama
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center">
                                <span className="mr-1">🏦</span>Kredi Hesaplama
                            </a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600">📱 iOS & Android'de ücretsiz</span>
                            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">İndir</a>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600">📧 info@emlakpro.com</span>
                            <span className="text-gray-400">|</span>
                            <span className="text-gray-600">📞 0850 XXX XXXX</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 gap-2">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 mr-12 flex-col flex justify-center">
                                <h1 className="text-2xl font-bold text-blue-600">Vexillum</h1>
                                <span className="text-xs text-gray-500">Türkiye'nin En Büyüğü</span>
                            </div>
                        </div>
                        
                        <nav className="hidden lg:flex space-x-8 relative">
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setShowMegaMenu(true)}
                                    onMouseLeave={() => setShowMegaMenu(false)}
                                    className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2 flex items-center"
                                >
                                    Satılık <span className="ml-1">▼</span>
                                </button>
                                {showMegaMenu && (
                                    <div 
                                        className="absolute top-full left-0 w-96 bg-white shadow-xl border border-gray-200 rounded-lg p-6 z-50"
                                        onMouseEnter={() => setShowMegaMenu(true)}
                                        onMouseLeave={() => setShowMegaMenu(false)}
                                    >
                                        <div className="grid grid-cols-1 gap-6">
                                            {Object.entries(megaMenuCategories).map(([key, category]) => (
                                                <div key={key}>
                                                    <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {category.subcategories.map((sub) => (
                                                            <a key={sub.name} href="#" className="flex items-center p-2 rounded-lg hover:bg-gray-50">
                                                                <span className="mr-2">{sub.icon}</span>
                                                                <div>
                                                                    <div className="font-medium text-sm">{sub.name}</div>
                                                                    <div className="text-xs text-gray-500">{sub.count}</div>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Kiralık</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Projeler</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Değerlendirme</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Rehber</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Haberler</a>
                            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Danışman</a>
                        </nav>
                        
                        <div className="flex items-center gap-4">
                            <button className="bg-green-600 text-white px-6 py-1 rounded-lg hover:bg-green-700 text-xs font-medium transition duration-200 flex items-center">
                                Kredi Hesapla
                            </button>
                            <button className="bg-orange-500 text-white px-6 py-1 rounded-lg hover:bg-orange-600 text-xs font-medium transition duration-200 flex items-center">
                                Ücretsiz İlan Ver
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section with Advanced Search */}
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 relative">
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                            Türkiye'nin En Büyük
                            <span className="text-blue-600 block">Emlak Platformu</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            2.8 milyondan fazla ilan, 750 bin mutlu müşteri ve 20 yıllık deneyimle
                            hayallerinizdeki gayrimenkulu bulun.
                        </p>
                        <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                            <div className="flex items-center">
                                <span className="mr-1">🏆</span>
                                <span>Türkiye'nin En Büyüğü</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-1">🛡️</span>
                                <span>%100 Güvenli</span>
                            </div>
                            <div className="flex items-center">
                                <span className="mr-1">⚡</span>
                                <span>Anında Sonuç</span>
                            </div>
                        </div>
                    </div>

                    {/* Advanced Search Box */}
                    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 max-w-6xl mx-auto">
                        {/* Search Type Tabs */}
                        <div className="flex space-x-1 mb-8 bg-gray-100 rounded-xl p-1">
                            <button
                                onClick={() => setActiveTab('satilik')}
                                className={`flex-1 py-4 px-6 rounded-xl font-medium transition duration-200 ${
                                    activeTab === 'satilik'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <span className="mr-2">🏠</span>Satılık
                            </button>
                            <button
                                onClick={() => setActiveTab('kiralik')}
                                className={`flex-1 py-4 px-6 rounded-xl font-medium transition duration-200 ${
                                    activeTab === 'kiralik'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <span className="mr-2">🔑</span>Kiralık
                            </button>
                            <button
                                onClick={() => setActiveTab('projeler')}
                                className={`flex-1 py-4 px-6 rounded-xl font-medium transition duration-200 ${
                                    activeTab === 'projeler'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <span className="mr-2">🏗️</span>Projeler
                            </button>
                            <button
                                onClick={() => setActiveTab('devren')}
                                className={`flex-1 py-4 px-6 rounded-xl font-medium transition duration-200 ${
                                    activeTab === 'devren'
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'text-gray-600 hover:text-gray-900'
                                }`}
                            >
                                <span className="mr-2">🔄</span>Devren
                            </button>
                        </div>
                        
                        {/* Basic Search Filters */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <select className="border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
                                <option value="">İl Seçiniz</option>
                                <option value="istanbul">İstanbul</option>
                                <option value="ankara">Ankara</option>
                                <option value="izmir">İzmir</option>
                                <option value="bursa">Bursa</option>
                                <option value="antalya">Antalya</option>
                                <option value="adana">Adana</option>
                                <option value="konya">Konya</option>
                                <option value="gaziantep">Gaziantep</option>
                            </select>
                            
                            <select className="border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
                                <option value="">İlçe Seçiniz</option>
                                <option value="besiktas">Beşiktaş</option>
                                <option value="sisli">Şişli</option>
                                <option value="kadikoy">Kadıköy</option>
                                <option value="uskudar">Üsküdar</option>
                                <option value="fatih">Fatih</option>
                            </select>
                            
                            <select className="border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
                                <option value="">Emlak Tipi</option>
                                <option value="daire">Daire</option>
                                <option value="villa">Villa</option>
                                <option value="ofis">Ofis</option>
                                <option value="arsa">Arsa</option>
                                <option value="mustakil">Müstakil Ev</option>
                            </select>
                            
                            <select className="border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white shadow-sm">
                                <option value="">Oda Sayısı</option>
                                <option value="1+0">1+0 (45 bin)</option>
                                <option value="1+1">1+1 (285 bin)</option>
                                <option value="2+1">2+1 (450 bin)</option>
                                <option value="3+1">3+1 (520 bin)</option>
                                <option value="4+1">4+1 (180 bin)</option>
                                <option value="5+1">5+1 (85 bin)</option>
                            </select>
                        </div>

                        {/* Price Range */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Min Fiyat (₺)"
                                    className="flex-1 border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Max Fiyat (₺)"
                                    className="flex-1 border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                            </div>
                            <div className="flex space-x-2">
                                <input
                                    type="text"
                                    placeholder="Min m²"
                                    className="flex-1 border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Max m²"
                                    className="flex-1 border border-gray-300 rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Advanced Filters Toggle */}
                        <div className="mb-6">
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                            >
                                <span className="mr-2">🔧</span>
                                {showFilters ? 'Gelişmiş Filtreleri Gizle' : 'Gelişmiş Filtreler'}
                                <span className="ml-1">{showFilters ? '▲' : '▼'}</span>
                            </button>
                        </div>

                        {/* Advanced Filters */}
                        {showFilters && (
                            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-200">
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">Bina Yaşı</option>
                                        <option value="0-5">0-5 yaş</option>
                                        <option value="6-10">6-10 yaş</option>
                                        <option value="11-15">11-15 yaş</option>
                                        <option value="16+">16+ yaş</option>
                                    </select>
                                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">Kat</option>
                                        <option value="1-3">1-3. Kat</option>
                                        <option value="4-7">4-7. Kat</option>
                                        <option value="8+">8+ Kat</option>
                                    </select>
                                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">Isıtma</option>
                                        <option value="merkezi">Merkezi</option>
                                        <option value="kombi">Kombi</option>
                                        <option value="klima">Klima</option>
                                    </select>
                                    <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                        <option value="">Banyo Sayısı</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3+">3+</option>
                                    </select>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Balkon</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Asansör</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Otopark</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Eşyalı</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Site İçinde</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Krediye Uygun</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Sahibinden</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded text-blue-600" />
                                        <span className="text-sm">Fotoğraflı</span>
                                    </label>
                                </div>
                            </div>
                        )}
                        
                        {/* Search Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:bg-blue-700 transition duration-200 flex items-center justify-center shadow-lg">
                                <span className="mr-2">🔍</span>
                                Ara ({activeTab === 'satilik' ? '2.1M' : activeTab === 'kiralik' ? '450K' : '1.2K'} ilan)
                            </button>
                            <button className="bg-gray-100 text-gray-700 py-4 px-8 rounded-xl font-medium hover:bg-gray-200 transition duration-200 flex items-center justify-center">
                                <span className="mr-2">🗺️</span>
                                Haritada Ara
                            </button>
                            <button className="bg-green-100 text-green-700 py-4 px-8 rounded-xl font-medium hover:bg-green-200 transition duration-200 flex items-center justify-center">
                                <span className="mr-2">🔔</span>
                                Arama Alarmı
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Price Trends Section */}
            <div className="bg-white py-16 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Şehir Bazında Fiyat Trendleri</h3>
                        <p className="text-gray-600">Güncel emlak fiyatları ve değişim oranları</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {pricesTrends.map((trend, index) => (
                            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="font-semibold text-gray-900">{trend.city}</h4>
                                    <span className={`text-sm px-2 py-1 rounded-full ${
                                        trend.trend === 'up' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                    }`}>
                                        {trend.trend === 'up' ? '📈' : '📉'} {trend.change}
                                    </span>
                                </div>
                                <div className="text-2xl font-bold text-blue-600 mb-2">₺{trend.avgPrice}</div>
                                <div className="text-sm text-gray-600">Ortalama fiyat</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Kategoriler</h3>
                        <p className="text-gray-600">Aradığınız emlak tipini seçin</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(megaMenuCategories).map(([key, category]) => (
                            <div key={key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h4>
                                <div className="space-y-3">
                                    {category.subcategories.map((sub) => (
                                        <a key={sub.name} href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition duration-200">
                                            <div className="flex items-center">
                                                <span className="text-2xl mr-3">{sub.icon}</span>
                                                <span className="font-medium">{sub.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{sub.count}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Properties */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Vitrin İlanları</h3>
                            <p className="text-gray-600">Öne çıkan premium emlak ilanları</p>
                        </div>
                        <div className="flex space-x-4">
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                Tümünü Gör →
                            </button>
                            <button className="text-blue-600 hover:text-blue-700 font-medium">
                                🗺️ Haritada Gör
                            </button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredProperties.map((property) => (
                            <div key={property.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 cursor-pointer border border-gray-200">
                                {/* Property Tags */}
                                <div className="relative">
                                    <div className="absolute top-0 left-0 right-0 z-10 p-3">
                                        <div className="flex justify-between items-start">
                                            <div className="flex space-x-2">
                                                {property.isVip && (
                                                    <span className="bg-orange-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                                                        VİTRİN
                                                    </span>
                                                )}
                                                {property.isUrgent && (
                                                    <span className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                                                        ACİL
                                                    </span>
                                                )}
                                                {property.virtualTour && (
                                                    <span className="bg-purple-500 text-white px-3 py-1 text-sm font-medium rounded-full">
                                                        360°
                                                    </span>
                                                )}
                                            </div>
                                            <div className="flex space-x-2">
                                                <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition duration-200">
                                                    <span className="text-gray-600">❤️</span>
                                                </button>
                                                <button className="bg-white/80 backdrop-blur-sm rounded-full p-2 hover:bg-white transition duration-200">
                                                    <span className="text-gray-600">📤</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                                        <span className="text-gray-500 text-lg">📷 {property.type} Fotoğrafı</span>
                                        <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-sm">
                                            1/15
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    {/* Price and Views */}
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="text-3xl font-bold text-blue-600 mb-1">
                                                ₺{property.price}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {property.pricePerM2} ₺/m²
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-gray-500 mb-1">{property.views} görüntülenme</div>
                                            <div className="text-sm text-gray-500">{property.date}</div>
                                        </div>
                                    </div>
                                    
                                    {/* Title */}
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {property.title}
                                    </h4>
                                    
                                    {/* Location */}
                                    <p className="text-gray-600 mb-4 flex items-center">
                                        <span className="mr-2">📍</span>
                                        <span>{property.neighborhood}, {property.location}</span>
                                    </p>
                                    
                                    {/* Property Details */}
                                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">🏠</span>
                                            <span>{property.area} m² ({property.netArea} net)</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🛏️</span>
                                            <span>{property.rooms}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🏢</span>
                                            <span>{property.floor}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">📅</span>
                                            <span>{property.age} yaş</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🔥</span>
                                            <span>{property.heating}</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="mr-2">🚿</span>
                                            <span>{property.bathroom} banyo</span>
                                        </div>
                                    </div>
                                    
                                    {/* Features */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-2">
                                            {property.features.slice(0, 3).map((feature, index) => (
                                                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                                    {feature}
                                                </span>
                                            ))}
                                            {property.features.length > 3 && (
                                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                                    +{property.features.length - 3} daha
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    {/* Nearby Places */}
                                    <div className="mb-4">
                                        <div className="text-sm text-gray-500 mb-2">Yakın Çevre:</div>
                                        <div className="flex flex-wrap gap-2">
                                            {property.nearbyPlaces.map((place, index) => (
                                                <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                                                    {place}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {/* Owner Info */}
                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                                <span className="text-gray-600">👤</span>
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm">{property.ownerName}</div>
                                                <div className="text-xs text-gray-500">{property.ownerType}</div>
                                            </div>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                                                Detaylar
                                            </button>
                                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition duration-200">
                                                Ara
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Advisor Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Emlak Danışmanlarımız</h3>
                        <p className="text-gray-600">Uzman ekibimizle hayallerinizdeki evi bulun</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {advisors.map((advisor) => (
                            <div key={advisor.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-2xl">👤</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{advisor.name}</h4>
                                        <p className="text-sm text-gray-600">{advisor.title}</p>
                                        <div className="flex items-center mt-1">
                                            <span className="text-yellow-500 text-sm">⭐</span>
                                            <span className="text-sm text-gray-600 ml-1">{advisor.rating} ({advisor.reviews} değerlendirme)</span>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <span className={`w-3 h-3 rounded-full ${advisor.online ? 'bg-green-500' : 'bg-gray-300'}`}></span>
                                    </div>
                                </div>
                                
                                <div className="mb-4">
                                    <p className="text-sm text-gray-600 mb-2">Uzmanlık Alanları:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {advisor.specialties.map((specialty, index) => (
                                            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">{advisor.experience} deneyim</span>
                                    <div className="flex space-x-2">
                                        <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition duration-200">
                                            Ara
                                        </button>
                                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition duration-200">
                                            Mesaj
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Rakamlarla EmlakPro</h3>
                        <p className="text-gray-600">Türkiye'nin en güvenilir emlak platformu</p>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">2.8M+</div>
                            <div className="text-gray-600 font-medium">Aktif İlan</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">750K+</div>
                            <div className="text-gray-600 font-medium">Kayıtlı Kullanıcı</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">500K+</div>
                            <div className="text-gray-600 font-medium">Mutlu Müşteri</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">81</div>
                            <div className="text-gray-600 font-medium">Şehir</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1.2K+</div>
                            <div className="text-gray-600 font-medium">Emlak Ofisi</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                            <div className="text-gray-600 font-medium">Yıllık Deneyim</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">Emlak Haberleri ve Rehberler</h3>
                            <p className="text-gray-600">Güncel haberler ve uzman tavsiyeleri</p>
                        </div>
                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                            Tüm Haberler →
                        </a>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative">
                                    <span className="text-gray-500">📰 Blog Resmi</span>
                                    <div className="absolute top-3 left-3">
                                        <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                                        {post.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                        <span>{post.author}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">{post.date}</span>
                                        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                            Devamını Oku →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Müşteri Deneyimleri</h3>
                        <p className="text-gray-600">Bize güvenen müşterilerimizin yorumları</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300">
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                                        <span className="text-lg">👤</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                    <div className="ml-auto flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-500">⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                                    "{testimonial.comment}"
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <span>{testimonial.location}</span>
                                    <span>{testimonial.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Hayallerinizdeki Evi Bulun
                    </h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                        Türkiye'nin en büyük emlak platformunda milyonlarca ilan arasından size en uygun olanı keşfedin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition duration-200">
                            🏠 Ücretsiz İlan Ver
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition duration-200">
                            📱 Mobil Uygulamayı İndir
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h4 className="text-2xl font-bold text-blue-400 mb-4">EmlakPro</h4>
                            <p className="text-gray-400 mb-4">
                                Türkiye'nin en büyük emlak platformu. 20 yıllık deneyimle güvenilir hizmet.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">📘</a>
                                <a href="#" className="text-gray-400 hover:text-white">🐦</a>
                                <a href="#" className="text-gray-400 hover:text-white">📷</a>
                                <a href="#" className="text-gray-400 hover:text-white">💼</a>
                            </div>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Emlak</h5>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Satılık</a></li>
                                <li><a href="#" className="hover:text-white">Kiralık</a></li>
                                <li><a href="#" className="hover:text-white">Projeler</a></li>
                                <li><a href="#" className="hover:text-white">Devren</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">Hizmetler</h5>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Emlak Danışmanlığı</a></li>
                                <li><a href="#" className="hover:text-white">Kredi Hesaplama</a></li>
                                <li><a href="#" className="hover:text-white">Değerlendirme</a></li>
                                <li><a href="#" className="hover:text-white">Sigorta</a></li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-semibold mb-4">İletişim</h5>
                            <ul className="space-y-2 text-gray-400">
                                <li>📞 0850 XXX XXXX</li>
                                <li>📧 info@emlakpro.com</li>
                                <li>📍 İstanbul, Türkiye</li>
                                <li>🕒 7/24 Destek</li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 EmlakPro. Tüm hakları saklıdır.</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Home;