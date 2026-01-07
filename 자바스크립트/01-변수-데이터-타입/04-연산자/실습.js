// --------------------------------------------------------------------------
// 실습: 연산자
// --------------------------------------------------------------------------
// * 산술 연산자 (Arithmetic Operators)
// * 할당 연산자 (Assignment Operators)
// * 논리 연산자 (Logical Operators)
// * 비교 연산자 (Comparison Operators)
// --------------------------------------------------------------------------

let data = 80
console.log(data)

// --------------------------------------------------------------------------
// [산술 연산] 기본 사칙연산
// --------------------------------------------------------------------------

// 덧셈 (+)
console.log(3 + 9)

// 뺄셈 (-)
console.log(3 - 9)

// 곱셈 (*)
console.log( 3 * 9)

// 나눗셈 (/)
console.log(9 / 3)

// 나머지 (%)
console.log(9 % 3)
console.log((9 + 1) % 3)
console.log((9 + 2) % 3)
console.log((9 + 3) % 3)
console.log((9 + 4) % 3)
console.log((9 + 5) % 3)

// 거듭제곱 연산자 (**)
console.log(2 * 2 * 2 * 2 * 2, 2 ** 5) //

// 수학(Math) 객체
console.log(Math.pow(2, 5) === 2 ** 5) //

// 복리 계산
const principal = 1_000_000 // 원금 100만원
const rate = 0.05 // 연 5% 이자율
const years = 3 // 3년
const amount = principal * (1 + rate) ** years // 원금  * (1 + 이자율)몇년간(거듭제곱)
const amount2 = principal * Math.pow((1 + rate), years ) 

console.log(amount)
console.log(amount2)

// --------------------------------------------------------------------------
// [산술 연산] 나머지 연산자 활용
// --------------------------------------------------------------------------

// 짝수/홀수 판별
console.log(10 % 2) // 짝수
console.log(11 % 2) // 홀수
console.log(12 % 2) // 짝수

// 3의 배수 확인
console.log(9 % 3) // 3의 배수
console.log(13 % 3) // 3의 배수 ❌
console.log(27 % 3) // 3의 배수

// 시계 계산 (12시간 형식. 예: 오후 3시)
console.log(10 % 12) //
console.log(15 % 12) //
console.log(19 % 12) //
console.log(21 % 12) //

// --------------------------------------------------------------------------
// [산술 연산] 문자열 연결
// --------------------------------------------------------------------------

// 문자열 + 문자열

const 성 = "김"
const 이름 = "효경"
console.log(성 + 이름)


// 문자열 + 숫자 (숫자가 문자열로 변환됨)
// 문자열 + 숫자 ??
// 문자열 + '숫자'(문자열화) = 문자열
const greetingMessage = '안녕!'
const myFavoriteNumber = 9
let confirmResult = greetingMessage + myFavoriteNumber

console.log(greetingMessage + myFavoriteNumber)
// const result = '안녕!' + 9
// const result = '안녕!' + '9' ~ 숫자 데이터를 문자화
// const result = '안녕!9'
console.log(confirmResult, typeof confirmResult)


// 숫자 + 문자열
confirmResult = myFavoriteNumber + greetingMessage
// confirmResult = 9 + '안녕!'
// confirmResult = '9' + '안녕!'
// confirmResult = '9안녕!'
console.log(confirmResult, typeof confirmResult)

confirmResult = greetingMessage + true
console.log(confirmResult, typeof confirmResult)

confirmResult = myFavoriteNumber + true
console.log(confirmResult, typeof confirmResult)

// --------------------------------------------------------------------------
// [산술 연산] 거듭제곱
// --------------------------------------------------------------------------

// 거듭제곱 (**)
// 8 (2의 3승)
// 9 (3의 2승)
// 1 (어떤 수의 0승은 1)
// 0.1 (음수 지수)

// Math.pow()와 동일
// 8
// 9
// 1
// 0.1


// --------------------------------------------------------------------------
// [산술 연산] 증가/감소 연산자
// --------------------------------------------------------------------------

// 증가(++) 연산자
// 감소(--) 연산자
// 주의! 전위(앞)/후위(뒤) 위치에 따라 작동 방식이 달라짐!

let count = 3
console.log(count)

// 후 증가 (Post-increment)
// count = count + 1

count++ // 메모리에서 count는 여전히 3
console.log(count) // 이 때 (다음라인) count = 4

// 선 증가 (Pre-increment)
// count = count + 1

++count // 이 라인에서 값이 바로 바뀜 (전증가라) count = 5
console.log(count) // 이 때도 count = 5

// 후 감소 (Post-decrement)
console.log(count--)
console.log(count)

// 선 감소 (Pre-decrement)
console.log(--count)
console.log(count)

// --------------------------------------------------------------------------
// [산술 연산] 할당 연산자
// --------------------------------------------------------------------------

// 산술 연산자와 할당 연산자를 활용해 변수의 값을 증가 또는 감소
let x = 10 + 21
console.log(x)

// 기본 할당
x = 8
console.log(x)

// 더한 후, 할당
//x = x + 2
//복합 할당 연산자 (할당 + 산술 연산자)
x += 2
console.log(x) 

// 뺀 후, 할당
//x = x - 9
x -= 9
console.log(x)

// 곱한 후, 할당
// x = x * 2
x *= 2
console.log(x)

// 나눈 후, 할당
// x = x / 2
x /= 2
console.log(x)

// 나머지 후, 할당
// x = x % 3
x %=2 
console.log(x)

// 거듭제곱 후, 할당
// x = x ** 1000
x **= 1000
console.log(x)


//순차적으로 오른편의 표현식이 평가되어 왼편의 변수에 할당
// 전체는 할당문 오른쪽은 표현식, 평가(evaluation)되어 할당

// --------------------------------------------------------------------------
// [할당 연산] 점수 누적
// --------------------------------------------------------------------------
let totalScore = 0

totalScore += 92
totalScore += 100
totalScore += 81
console.log(totalScore)

// [할당 연산] 재고 감소
let stock = 100
stock -= 5
stock -= 15
stock -= 34
console.log(stock)

// [할당 연산] 가격 인상
let price = 10000
price *= (1 + 0.5) // 50%인상
console.log(price)


// --------------------------------------------------------------------------
// [논리 연산] AND (&&)
// --------------------------------------------------------------------------

// X && Y (X 그리고 Y)
// 모든 조건이 true여야 true

// 예제: 로그인 & 권한 검증
// Netflix 구독 (계정 소유 && 사용료 지불)
let is_logged_in = false
let has_permission = false
// 로그인 ❌ 권한 ❌ 출력 결과: false
console.log(is_logged_in && has_permission)

// 로그인 ✅ 권한 ❌ 출력 결과: false
is_logged_in = true
console.log(is_logged_in && has_permission)

// 로그인 ❌ 권한 ✅ 출력 결과: false
is_logged_in = false
has_permission = true
console.log(is_logged_in && has_permission)

// 로그인 ✅ 권한 ✅ 출력 결과: true
is_logged_in = true
console.log(is_logged_in && has_permission)


// --------------------------------------------------------------------------
// [논리 연산] OR (||)
// --------------------------------------------------------------------------


// X || Y (X 또는 Y)
// 조건 중 하나만 true여도 true
// 모든 조건이 거짓일 때만 false

// 예제: 이상형 확인
let is_handsome
let is_rich
// 잘생김 ❌ 부자 ❌ 출력 결과: false
is_handsome = false
is_rich = false
console.log(is_handsome || is_rich)

// 잘생김 ❌ 부자 ✅ 출력 결과: true
is_rich = true
console.log(is_handsome || is_rich)

// 잘생김 ✅ 부자 ❌ 출력 결과: true
is_handsome = true
is_rich = false
console.log(is_handsome || is_rich)

// 잘생김 ✅ 부자 ✅ 출력 결과: true
is_rich = true
console.log(is_handsome || is_rich)

// --------------------------------------------------------------------------
// [논리 연산] NOT (!)
// --------------------------------------------------------------------------

// 반대로 변환
let truthy = true
// 출력 결과: false
let reverse_truthy = !truthy
console.log (reverse_truthy)


let falsy = false
let reverse_falsy = !falsy
// 출력 결과: true
console.log(reverse_falsy)

// 예제: 로그인 상태 반전
let is_logged_out = !is_logged_in //값 반전
// 출력 결과: is_logged_in 값 반전
console.log(is_logged_out)

// 이중 부정 (!!) - boolean 변환 (Boolean() 대체)
console.log(Boolean('자바스크립트'))
console.log(!!'자바스크립트')


// '' 변환 출력 결과: false
console.log(Boolean(''))
console.log(!!'')

// ' ' 변환 출력 결과: true
console.log(Boolean(' '))
console.log(!!' ')

// 0 변환 출력 결과: false
console.log(Boolean(0))
console.log(!!0)

// '0' 변환 출력 결과: true
console.log(Boolean('0'))
console.log(!!'0')

// 1 변환 출력 결과: true
console.log(Boolean(1))
console.log(!!1)

// '1' 변환 출력 결과: true
console.log(Boolean('1'))
console.log(!!'1')

// null 변환 출력 결과: false
console.log(Boolean(null))
console.log(!!null)

// undefined 변환 출력 결과: false
console.log(Boolean(undefined))
console.log(!!undefined)


// --------------------------------------------------------------------------
// [비교 연산] 크기 비교
// --------------------------------------------------------------------------

const a = 9, b = 4

// 숫자 비교
// * 10이 5보다 큼
console.log(a > b)

// * 10이 5보다 작지 않음
console.log(a < b)

// * 10이 10보다 크거나 같음
console.log(a >= b)
// * 10이 5보다 작거나 같지 않음
console.log(a <= b)

//===================
// 문자열 비교 (사전순)
//===================
const memberName = '김이현'
const partnerName = '이주인'

console.log(memberName < partnerName)
console.log('박아영' < '황현주')
console.log('황현주' < '최수인')


// * 'a', 'b' 비교
console.log('a' < 'b')
console.log('k' < 'z')

// * 'apple', 'banana' 비교 ~ 단어 비교시 첫글자를 가지고 비교(같으면 뒤 알파벳을 순차적으로 비교)
console.log('apple' < 'banana')

// * 'A', 'a' 비교 (대문자가 소문자보다 작음 n, Q 비교했을 때, n이 소문자라 n이 더 크다.)
console.log('A' < 'a')

// 문자열과 숫자 비교 (문자열이 숫자로 변환됨)
// * '10'이 5보다 큼
console.log('10' > 5)
// * '100'이 '20'보다 작음 (문자열끼리 비교하면 사전순!)
console.log('20' > '100')


// --------------------------------------------------------------------------
// [비교 연산] 동등 비교 vs 일치 비교
// --------------------------------------------------------------------------
// * == (동등): 값만 비교 (타입 변환 후 비교)
// 0 == '0' // false ? true ?

//사용자가 작성한 코드
console.log(0 == '0')
// JavaScript 엔진이 처리하는 코드
console.log(0 == Number('0'))

// * === (일치): 타입과 값 모두 비교
//사용자가 작성한 코드
console.log(0 === '0')
// JavaScript 엔진이 처리하는 코드
console.log(0 === '0')

console.log(null === undefined)
console.log(null == undefined)
//(불리언 값으로 비교)

// --------------------------------------------------------------------------
// [비교 연산] 불일치 비교
// --------------------------------------------------------------------------
// * != (불일치): 값만 비교
console.log('9' != 9)

// * !== (불일치): 타입과 값 모두 비교
console.log('9' !== 9)

// --------------------------------------------------------------------------
// [논리 연산] 복합 조건
// --------------------------------------------------------------------------

// 예제: 할인 적용 조건
let is_member = true
let purchase_amount = 50000
// 멤버이고 구매 금액이 3만원 이상인 경우, 할인 적용
// 할인 적용 대상인지 여부를 표현식으로 구현하세요
// A [멤버(true)] 그리고(&&) B[구매 금액 >= 3e4] -> 참 또는 거짓
let has_discount = is_member && (purchase_amount >= 3e4)
console.log(has_discount)

// 예제: 접근 권한 조건
let is_admin = false
let is_owner = true
// 관리자이거나 주인인 경우, 접근 허용
let can_access = is_admin || is_owner
console.log (can_access)

// 예제: 신선 유지 온도 조건
let temperature = 26
// 온도가 18도 이상 26도 이하인 경우, 신선 유지
// 직접 표현식으로 구현 (평가값 : Boolean)
// 조건 A: 온도 >= 18 (temperature >= 18)
// 조건 B: 온도 <= 26 (temperature <= 26)
// 조건 A 그리고 조건 B (A && B)
// temperature >= 18 && temperature <= 26
let keep_fresh = 18 <= temperature && temperature <= 26
console.log(keep_fresh)


// --------------------------------------------------------------------------
// 연산자 우선 순위
// --------------------------------------------------------------------------
// 1. 괄호가 최우선
// 2. 곱셈/나눗셈이 덧셈/뺄셈보다 우선
// 3. 왼쪽에서 오른쪽으로 (같은 레벨의 연산이 함께 있을 경우 - 나눗셈, 곱하기)
// 4. 할당은 가장 나중


// --------------------------------------------------------------------------
// 주의사항
// --------------------------------------------------------------------------
// * 문자열 + 숫자(문자화)
let input1/*애플망고 개수*/ = '5', input2/*참외 개수*/ = '9'

console.log(Number(input2) + Number(input1))
console.log(input1 + input2)

// * 문자열(숫자화) - 숫자 (숫자)
let input3 = '101', input4 = 8
console.log(input3 - input4)
console.log(input3 * input4)
console.log(input3 / input4)  


// * 문제 해결 방법 (문자 → 숫자 변환 후 연산)
console.log(Number(input3) - Number(input4))
console.log(Number(input3) * Number(input4))
console.log(Number(input3) / Number(input4))

{
// * 증가, 감소 연산자 위치 (전/후)
let count = 5

// 전위: 먼저 증가/감소 후 사용
console.log(++count)  // 6 (count는 6이 됨)
console.log(count)    // 6

count = 5  // 초기화

// 후위: 먼저 사용 후 증가/감소
console.log(count++)  // 5 (출력 후 count가 6이 됨)
console.log(count)    // 6
}

