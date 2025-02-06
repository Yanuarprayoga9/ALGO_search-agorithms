function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Menukar elemen menggunakan variabel sementara
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--; // Mengurangi panjang array yang perlu diperiksa
    } while (swapped);
    return arr;
}

// Contoh penggunaan
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Array sebelum sorting:", arr);
console.log("Array setelah sorting:", bubbleSort(arr));
