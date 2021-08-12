#!/usr/bin/env python

from Crypto.Cipher import AES
from Crypto.Util.number import *
from binascii import hexlify
import random
with open('r5/defygg-hot-flag.txt','r') as f:
    flag = f.read().strip()

with open('r5/defygg-hot-key.txt','rb') as f:
    key = f.read()
    assert len(key)==32

def encrypt(message, key):
    nonce = b"defygg=hot"
    cipher = AES.new(key, AES.MODE_CTR, nonce = nonce)
    return cipher.encrypt(message)

def newflag(oldflag):
    s=list("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPWRSTUVWXYYZ")
    for i in range(random.randint(1,10)):
        oldflag=random.choice(s)+oldflag
    for i in range(random.randint(1,10)):
        oldflag=oldflag+random.choice(s)
    return oldflag

print("Hey, hows life, hows the kids....so I was thinking, the people who made AES are geniosity")
print("soo...that means..every mode of AES has to be geniosity, right?..RIGHT?")
print("No? How dare you not think what I think. Now I'm going to pad the messages")
print("Click enter to get a new encrypted flag!")


while True:
    input()
    encrypted = encrypt(newflag(flag).encode(), key)
    print('Ciphertext:', hexlify(encrypted).decode())

