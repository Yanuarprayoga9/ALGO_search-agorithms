# Algoritma Pengurutan (Sorting Algorithms)

Dokumentasi ini menjelaskan beberapa algoritma pengurutan yang sering digunakan dalam pengolahan data. Algoritma pengurutan sangat penting untuk meningkatkan efisiensi dalam berbagai aplikasi yang memerlukan data terurut, seperti pencarian dan analisis.

## 1. **Bubble Sort**
   **Deskripsi**: Algoritma Bubble Sort mengurutkan array dengan membandingkan elemen-elemen yang berdekatan dan menukarnya jika berada dalam urutan yang salah. Proses ini diulang hingga array terurut.
   
   **Kompleksitas Waktu**: 
   - Kasus Terburuk: O(n²)
   - Kasus Terbaik: O(n)
   
   **Kelebihan**: Mudah diimplementasikan.  
   **Kekurangan**: Tidak efisien untuk dataset besar.

---

## 2. **Quick Sort**
   **Deskripsi**: Quick Sort adalah algoritma pengurutan berbasis **Divide and Conquer**. Algoritma ini memilih elemen pivot dan membagi array menjadi dua bagian, kemudian mengurutkan setiap bagian secara rekursif.
   
   **Kompleksitas Waktu**: 
   - Kasus Terburuk: O(n²)
   - Kasus Terbaik: O(n log n)
   
   **Kelebihan**: Cepat pada dataset besar dan efisien dalam penggunaan ruang.  
   **Kekurangan**: Tidak stabil dan memiliki kompleksitas O(n²) pada kasus terburuk.

---

## 3. **Merge Sort**
   **Deskripsi**: Merge Sort adalah algoritma berbasis **Divide and Conquer** yang membagi array menjadi dua bagian, mengurutkannya secara rekursif, dan menggabungkan kembali hasilnya dalam urutan yang benar.
   
   **Kompleksitas Waktu**: 
   - O(n log n) pada semua kasus.
   
   **Kelebihan**: Stabil dan efisien pada array besar.  
   **Kekurangan**: Membutuhkan ruang tambahan (O(n)).

---

## 4. **Insertion Sort**
   **Deskripsi**: Insertion Sort bekerja dengan cara mengurutkan elemen satu per satu, menyisipkan setiap elemen pada posisi yang tepat dalam urutan yang terurut.
   
   **Kompleksitas Waktu**: 
   - Kasus Terburuk: O(n²)
   - Kasus Terbaik: O(n)
   
   **Kelebihan**: Efisien untuk array kecil dan hampir terurut.  
   **Kekurangan**: Tidak efisien pada dataset besar.

---

## 5. **Selection Sort**
   **Deskripsi**: Selection Sort mengurutkan dengan cara mencari elemen terkecil (atau terbesar) dan menukarnya dengan elemen yang sesuai di posisi yang benar, kemudian melanjutkan ke elemen berikutnya.
   
   **Kompleksitas Waktu**: 
   - O(n²) pada semua kasus.
   
   **Kelebihan**: Mudah diimplementasikan.  
   **Kekurangan**: Tidak efisien pada array besar.

---

## 6. **Heap Sort**
   **Deskripsi**: Heap Sort menggunakan struktur data heap untuk mengurutkan elemen. Algoritma ini mengubah array menjadi heap terlebih dahulu dan kemudian mengekstrak elemen terbesar (atau terkecil) untuk membangun urutan yang benar.
   
   **Kompleksitas Waktu**: 
   - O(n log n) pada semua kasus.
   
   **Kelebihan**: Efisien, tidak memerlukan ruang tambahan.  
   **Kekurangan**: Tidak stabil dan lebih rumit dari Quick Sort.

---

## 7. **Radix Sort**
   **Deskripsi**: Radix Sort adalah algoritma pengurutan non-komparatif yang mengurutkan elemen berdasarkan digitnya, dimulai dari digit paling rendah hingga paling tinggi.
   
   **Kompleksitas Waktu**: 
   - O(nk), di mana *n* adalah jumlah elemen dan *k* adalah jumlah digit.
   
   **Kelebihan**: Cepat untuk data dengan nilai terbatas.  
   **Kekurangan**: Tidak cocok untuk data non-numerik dan rentang nilai yang sangat besar.

---

## 8. **Counting Sort**
   **Deskripsi**: Counting Sort mengurutkan dengan menghitung kemunculan setiap elemen dan menggunakan informasi tersebut untuk menentukan posisi elemen-elemen dalam array yang terurut.
   
   **Kompleksitas Waktu**: 
   - O(n + k), di mana *n* adalah jumlah elemen dan *k* adalah rentang nilai elemen.
   
   **Kelebihan**: Efisien untuk data dengan rentang nilai yang terbatas.  
   **Kekurangan**: Tidak efisien jika rentang nilai terlalu besar.

---

## 9. **Bucket Sort**
   **Deskripsi**: Bucket Sort membagi elemen-elemen ke dalam beberapa bucket berdasarkan rentang nilai, kemudian mengurutkan elemen dalam setiap bucket dan menggabungkannya.
   
   **Kompleksitas Waktu**: 
   - O(n + k), jika distribusi data merata.
   
   **Kelebihan**: Cepat untuk data yang tersebar merata.  
   **Kekurangan**: Tidak efisien jika distribusi data tidak merata.

---

## 10. **Tim Sort**
   **Deskripsi**: Tim Sort adalah algoritma pengurutan berbasis gabungan antara Merge Sort dan Insertion Sort. Ini dioptimalkan untuk data yang sebagian besar sudah terurut.
   
   **Kompleksitas Waktu**: 
   - O(n log n) dalam kasus terburuk.
   
   **Kelebihan**: Digunakan dalam implementasi bahasa pemrograman seperti Python (sebagai algoritma default untuk `sort()`).  
   **Kekurangan**: Implementasinya lebih kompleks daripada algoritma lainnya.

---

## Pemilihan Algoritma Pengurutan
Pemilihan algoritma pengurutan yang tepat tergantung pada karakteristik data yang dihadapi:
- **Bubble Sort**, **Insertion Sort**, dan **Selection Sort** cocok untuk data kecil atau hampir terurut.
- **Quick Sort** dan **Merge Sort** adalah pilihan yang sangat baik untuk data besar dengan performa terbaik O(n log n).
- **Radix Sort**, **Counting Sort**, dan **Bucket Sort** dapat digunakan untuk data numerik dengan rentang terbatas untuk mencapai performa lebih cepat.

---

## Kesimpulan
Algoritma pengurutan sangat berguna untuk meningkatkan efisiensi pemrosesan data dan memilih algoritma yang tepat dapat menghemat waktu dan memori, terutama ketika bekerja dengan dataset besar. Pilih algoritma yang sesuai dengan jenis data dan konteks penggunaan untuk mendapatkan hasil terbaik.
