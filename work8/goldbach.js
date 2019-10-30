function isPrime(number)
{
    var coumt=0;
    for(var i =1;i<=number;i++)
    {
        if(number%i==0)
        {
            coumt++
        }
    }
    return Count == 2;
    var n = parseInt(prompt('请输入一个偶数'));
    for (var i =1;i<n;i++)
    if(isPrime(i) && isPrime(n-i))
    {
        console.log(i,(n-i));
    }
}