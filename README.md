# IPFS Upload App

Đây là một ứng dụng có chức năng upload file lên một ipfs host và lưu trữ các Hash đã upload vào Database

## Requirement
1. Có kết nối internet (Để kết nối online database)
1. Đã cài đặt nodejs v6+

## Installation

Sau khi clone thành công từ github tiến hành cài đặt các gói cần thiết:

Vào thư mục server mở cmd thực hiện các lệnh:
```sh
$ npm install
$ npm start
```

Vào thư mục client mở cmd thực hiện các lệnh:

```sh
$ npm install
$ npm start
```
Chú ý: Ở client có thể config địa chỉ server ở mục. Nếu không có thể để như vậy thì chỉ kết nối được localhost
```sh
client/src/config/host.js
```

## Usage

- Truy cập http://localhost:3000.
Trang web yêu cầu đăng nhập. 
- Có thể sử dụng các tài khoản sau để đăng nhập: 

Tài khoản | Mật khẩu
------------ | -------------
thinh@gmail.com | abc123
thinh2@gmail.com | abc123
thupx@gmail.com | abc123
anhnguyen@gmail.com | abc123
hoangtrinh@gmail.com | abc123

- Hoặc bấm Menu -> Register để đăng ký tài khoản mới



- Sau khi đăng nhập, bấm Menu -> IPFS để vào giao diện upload
- Để upload một file:
 1. Bấm nút ADD FILE
1. Chọn file (Không quá 50MB)
1. Nhấn Submit
- Sau khi add thành công, một hash mới sẽ được hiển thị. Bấm vào hash đó để truy cập file đã upload

## Contributing
thinhnnd
thupx
anhnguyen
hoangtrinh
## License
No License