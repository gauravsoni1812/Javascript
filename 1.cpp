#include <iostream>
using namespace std;
#include <bits/stdc++.h>
struct Node
{
    int data;
    struct Node *left;
    struct Node *right;
};

Node *newNode(int val)
{
    Node *temp = new Node;
    temp->data = val;
    temp->left = NULL;
    temp->right = NULL;
}

void helper(Node *root,vector<vector<int>> &ans, vector<int> &res)
{
    if (root == NULL)
    {
        return;
    }
    if (root->left == NULL && root->right == NULL)
    {
        ans.push_back(res);
        return;
    }
    res.push_back(root->data);
    helper(root->left, ans, res);
    helper(root->right, ans, res);
    res.pop_back();
}
vector<vector<int>> Paths(Node *root)
{
    // Code here
    vector<vector<int>> ans;
    vector<int> res;
    helper(root, ans, res);
    return ans;
}