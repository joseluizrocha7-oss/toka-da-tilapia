from rembg import remove

inp_path = r'c:\Users\Rocha Digital Studio\Documents\A virada\Toka da Tilápia\dados\Fotos Toka\logo-toka-moderno.png'
out_path = r'c:\Users\Rocha Digital Studio\Documents\A virada\Toka da Tilápia\identidade\logo-toka-moderno-sem-fundo.png'

with open(inp_path, 'rb') as f:
    inp = f.read()

out = remove(inp)

with open(out_path, 'wb') as f:
    f.write(out)

print('OK — salvo em identidade/logo-toka-moderno-sem-fundo.png')
