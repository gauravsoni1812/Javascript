#include <iostream>
using namespace std;
#include <bits/stdc++.h>
bool check_pali(int i, int j, string &str)
{
    while (i < j)
    {
        if (str[i] == str[j])
        {
            i++, j--;
        }
        else
        {
            return false;
        }
    }
    return true;
}
int helper(int i, int j, string &str)
{
    if (i == j)
    {
        return 0;
    }
    if (check_pali(i, j, str))
    {
        return 0;
    }
    int ans = INT_MAX;
    for (int k = i; k < j; k++)
    {
        int a = helper(i + 1, k, str);
        int b = helper(k + 1, j, str);
        ans = min(ans, a + b + 1);
    }
    return ans;
}
int palindromicPartition(string str)
{
    // code here
    int n = str.size();
    return helper(0, n - 1, str);
}