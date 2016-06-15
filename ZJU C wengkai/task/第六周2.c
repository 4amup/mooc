// 给定一个n*n矩阵A。矩阵A的鞍点是一个位置（i，j），在该位置上的元素是第i行上的最大数，第j列上的最小数。一个矩阵A也可能没有鞍点。
// 你的任务是找出A的鞍点。

// 输入格式:
// 输入的第1行是一个正整数n, （1<=n<=100），然后有n行，每一行有n个整数，同一行上两个整数之间有一个或多个空格。

// 输出格式：
// 对输入的矩阵，如果找到鞍点，就输出其下标。下标为两个数字，第一个数字是行号，第二个数字是列号，均从0开始计数。
// 如果找不到，就输出
// NO
// 题目所给的数据保证了不会出现多个鞍点。

// 输入样例：
// 4 
// 1 7 4 1 
// 4 8 3 6 
// 1 6 1 2 
// 0 7 8 9

// 输出样例：
// 2 1

#include <stdio.h>
  
#define M 100
#define N 100
  
int main(void) {
    int i,j,m,n;
    int max,jmax,flag,f = 1;
    int a[M][N];
    while(scanf("%d",&n) != EOF){
        for(i = 0; i < n; ++i)
        {
        	for(j = 0; j < n; ++j)
        	{
        		scanf("%d",&a[i][j]);
        	}
        }
        
        for(i = 0; i < n; ++i){
            max = a[i][0];
            jmax = 0;
            for(j = 1; j < n; ++j) { // 找出i行最大的
                if(max < a[i][j]){
                    max = a[i][j];
                    jmax = j; // 且记录所在的列坐标
               }
            }
            flag = 1; // 预置标志
            int ii;
            for(ii = 0; ii < n && flag; ++ii) { // 判断max是否为所在列最小的
                if(a[ii][jmax] < max) // 不是
                    flag = 0; // 则清标志
            }
            if(flag == 1){
                printf("%d %d\n",i,jmax);
                f = 0;
            }
        }
        if(f) printf("NO\n");
    }
    return 0;
}