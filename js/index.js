document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.forEach(function (otherLink) {
                var icon = otherLink.querySelector('i.fa-solid');
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            });
            var icon = link.querySelector('i.fa-solid');
            if (icon.classList.contains('fa-book')) {
                icon.classList.remove('fa-book');
                icon.classList.add('fa-book-open');
            } else if (icon.classList.contains('fa-book-open')) {
                icon.classList.remove('fa-book-open');
                icon.classList.add('fa-book');
            }
        });
    });

    // Bài 1: tính tiền lương
    document.getElementById('salaryForm').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateSalary();
    });

    // Bài 2: Tính giá trị trung bình
    document.getElementById('avgForm').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateAverage();
    });

    // Bài 3: Quy đổi tiền
    document.getElementById('exChangeMoney').addEventListener('submit', function (event) {
        event.preventDefault();
        exchangeMoney();
    });

    // Bài 4: Tính diện tích, chu vi chữ nhật
    document.getElementById('rectangle').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateRectangle();
    });

    // Bài 5: Tính tổng 2 kí số
    document.getElementById('calculateTotal').addEventListener('submit', function (event) {
        event.preventDefault();
        calculateTotal();
    });
});


// Bài 1 : tính tiền lương nhân viên

function calculateSalary() {

    // B1: Lấy dữ liệu đầu vào
    var payDay = parseInt(document.getElementById('payDay').value);
    var workDay = parseInt(document.getElementById('workDay').value);

    // B2: Xử lý bài toán
    var salary = workDay * payDay * 1;

    // B3: Hiển thị kết quả
    document.getElementById('result').innerText=`👉 ${salary}`;

};
// <--------------------------------------------------->


// Bài 2 : Tính giá trị trung bình

function calculateAverage() {

    // b1: các dữ liệu đầu vào
    var num1,num2,num3,num4,num5;
    var avg;
    num1=parseInt(document.getElementById('num1').value);
    num2=parseInt(document.getElementById('num2').value);
    num3=parseInt(document.getElementById('num3').value);
    num4=parseInt(document.getElementById('num4').value);
    num5=parseInt(document.getElementById('num5').value);

    // b2: xử lí bài toán
    avg = (num1+num2+num3+num4+num5)/5;

    // b3 : các dữ liệu đầu ra
    document.getElementById('result2').innerText=`👉 ${avg}`;

};
// <--------------------------------------------------->


// Bài 3 : Quy đổi tiền

function exchangeMoney() {

    // b1: các dữ liệu đầu vào
    const VND=23500;
    var USD = parseInt(document.getElementById('USD').value);
    var money;

    // b2: xử lí bài toán
    money = USD * VND *1;

    // b3 : các dữ liệu đầu ra
    money = new Intl.NumberFormat('vn-VN').format(money);
    document.getElementById('result3').innerText=`👉 ${money}`;

};
// <--------------------------------------------------->


// Bài 4 : Tính diện tích, chu vi chữ nhật

function calculateRectangle() {

    // b1: các dữ liệu đầu vào
    var width = parseInt(document.getElementById('width').value);
    var length = parseInt(document.getElementById('length').value);
    var perimeter,area;

    // b2: xử lí bài toán
    perimeter = (width+length)*2;
    area = width * length;

    // b3 : các dữ liệu đầu ra

    document.getElementById('result4').innerText=`👉 chu vi: ${perimeter} ; diện tích: ${area}  `;

};
// <--------------------------------------------------->


// Bài 5 : Tính tổng 2 kí số

function calculateTotal() {

    // b1: các dữ liệu đầu vào
    var numb5 = parseInt(document.getElementById('numb5').value);
    var ten,unit,total;

    // b2: xử lí bài toán
    ten = Math.floor(numb5 / 10);
    unit = numb5 % 10;
    total = ten + unit;

    // b3 : các dữ liệu đầu ra
    document.getElementById('result5').innerText=`👉 ${total}`;

};