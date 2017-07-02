cipherFile = open('./p059_cipher.txt', encoding='utf-8')
cipher = cipherFile.read() # read returns string
cipherList = cipher.split(",")
cipherLength = len(cipherList)

# troche brzydkie rozwiazanie, ale sie poprawi

for i in range (97,123):
    for j in range (97,123):
        for k in range (97,123):
            # teraz dla kazdej opcji klucza lecimy po calym lancuchu:
            l = 0
            decodedList = []
            while l < cipherLength:
                decodedList.append(int(cipherList[l]) ^ i)
                if l+1 < cipherLength:
                    decodedList.append(int(cipherList[l+1]) ^ j)
                if l+2 < cipherLength:
                    decodedList.append(int(cipherList[l+2]) ^ k)
                l += 3
            decodedString = ''.join(chr(i) for i in decodedList)
            if decodedString.find(" the ") !=  -1:
                print("key: ", chr(i), chr(j), chr(k))
                print(decodedString)
                sum = 0
                for a in decodedString:
                    sum += ord(a)
                print(sum)





