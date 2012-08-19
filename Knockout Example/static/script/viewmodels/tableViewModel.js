// Rezervasyon Sınıfı
function KoltukRezervasyon(isim, parametreYemek) {
    var self = this;
    self.isim = isim;
    self.yemek = ko.observable(parametreYemek);
}

// ViewModel
function RezervasyonViewModel() {
    var self = this;

    //yemek Listesi
    self.yemekListesi = [
        { yemekAdi: "Standard (sandwich)", fiyat: 0 },
        { yemekAdi: "Premium (Adana Kebap)", fiyat: 34.95 },
        { yemekAdi: "Ultimate (Karışık Kebap)", fiyat: 290 }
    ];    

    // Rezervasyon listesi
    self.koltuklar = ko.observableArray([
        new KoltukRezervasyon("Salim", self.yemekListesi[0]),
        new KoltukRezervasyon("Ertuğrul", self.yemekListesi[0])
    ]);
      self.koltukEkle = function() {
        self.koltuklar.push(new KoltukRezervasyon("Ertuğrul", self.yemekListesi[0]));
    }
}

ko.applyBindings(new RezervasyonViewModel());