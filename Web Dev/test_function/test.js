function test() {
	alert('hello');
}
function TEST() {
	test();
}
window.onload = TEST();