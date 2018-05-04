//执行上下文栈 (作用域)
function one(){
    let a=1;
    two();
    function two(){
        let b=2;
        three();
        function three(){
            console.log(b)
        }
    }
};
one();