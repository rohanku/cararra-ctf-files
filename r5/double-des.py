from Crypto.Cipher import DES
import binascii
import random
import string


def pad(msg):
    block_len = 8
    over = len(msg) % block_len
    pad = block_len - over
    return (msg + " " * pad).encode()

def generate_key():
    return pad("".join(random.choice(string.digits) for _ in range(6)))


FLAG = "not_the_answer!"
KEY1 = generate_key()
KEY2 = generate_key()


def double_encrypt(m):
    msg = pad(m)

    cipher1 = DES.new(KEY1, DES.MODE_ECB)
    enc_msg = cipher1.encrypt(msg)
    cipher2 = DES.new(KEY2, DES.MODE_ECB)
    return binascii.hexlify(cipher2.encrypt(enc_msg)).decode()

print(double_encrypt(FLAG))

plaintext = "sample_text"

print(plaintext)
print(double_encrypt(plaintext))
