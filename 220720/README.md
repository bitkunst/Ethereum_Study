# Solidity

payable 속성
<br>
token : 1ETH 주면 -> 100ITK
<br>
<br>

## payable

AppleShop
<br>
온라인에서 파는 사과
<br>

-   사과 1개 : 1 ETH
-   환불 기능

구매 : front -> 사과 구매를 누르면 -> Smart Contract 실행
<br>
환불 : front -> 환불 버튼 누르면 -> Smart Contract 실행
<br>
이 때 Smart Contract는 ETH를 받을 수 있는 상태여야 하고
<br>
환불 진행시 다시 환급해줘야 한다.
<br>
사과 사는 사람 -> CA -> 판매자
<br>
CA에 잠시 ETH를 보관하고 있는 개념
<br>
(CA가 다른 사용자의 ETH를 잠시 보관하는 개념.)
<br>

mapping

1. buy 함수
2. sell 함수
3. getter

```js
tx = {
    from: account
    to: CA
    data: '0x...'
    value: 1 ETH
}
```

AppleShop
CA : 0x660ec2062AE3523505973c1651C62Fd9c9Af2413

ganache
개인키1 : 0x59d08d0ab3b02a0b451c15581649b2a6e290273560dda3c0e6fa8b364c061095
개인키2 : 0x6abd4343883661fca1bf8c70b987abf44acfba49edd1a6b7691faf31f4184024

Token
<br>
개발자가 개발 자금을 벌기 위해서
<br>
ERC-20 만드는 것을 재활용 할 수 있게
<br>

## interface

객체지향적 코딩
<br>
추상클래스, 인터페이스
<br>

```js
자동차 {
    바퀴,
    핸들,
    문,
    범퍼,
    라이트,
}
```

미리 지정해 놓고 시작.
<br>
IERC 에서 전체적인 틀을 잡아놓고
<br>
ERC20 에서 세부 내용 작성
<br>

IngToken
CA : 0xd4992c2445Cb054853d7E7a4A0563656544D095d
