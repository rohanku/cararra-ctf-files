import random
flag = "<REDACTED>"
key = [random.randint(0, 255) for i in range(64)]

def otp(msg, key):
    if len(msg) != len(key):
        print("please make sure the length of your message is 48!")
        return ""
    return "".join(['{:02x}'.format(ord(msg[i]) ^ key[i]) for i in range(len(key))])

print(otp(flag + 'a' * (len(key) - len(flag)), key))
print(otp('a' * (len(key) - len(flag)) + flag, key))
