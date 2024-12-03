const WebSocket = require('ws');

const socket = new WebSocket('wss://api.upbit.com/websocket/v1');

let previousPrice = null;

socket.on('open', () => {
  console.log('웹소켓 연결 성공');
  
  // 구독 메시지 전송
  // 원하는 코인의 마켓 코드 입력 (여러개 가능)
  const msg = JSON.stringify([
    { ticket: 'unique_ticket_id' },
    { type: 'ticker', codes: ['KRW-BTC'] } 
  ]);
  socket.send(msg);
});

socket.on('message', (data) => {
  const jsonData = JSON.parse(data.toString());
  const currentPrice = jsonData.trade_price;

  if (previousPrice === null) {
    console.log(`\x1b[32mprice: ${currentPrice} KRW (초기 값)\x1b[0m`);
  } else {
    if (currentPrice > previousPrice) {
      console.log(`\x1b[32m▲ price: ${currentPrice} KRW (상승)\x1b[0m`);
    } else if (currentPrice < previousPrice) {
      console.log(`\x1b[31m▼ price: ${currentPrice} KRW (하락)\x1b[0m`);
    } else {
      console.log(`\x1b[33mprice: ${currentPrice} KRW (변동 없음)\x1b[0m`);
    }
  }
  previousPrice = currentPrice;
});

socket.on('error', (error) => {
  console.error('웹소켓 에러:', error);
});

socket.on('close', () => {
  console.log('웹소켓 연결 종료');
});
