def obter_nome():
    return input("Qual o seu nome? ")

def apresentar_jogo(nome):
    print(f"Seja bem-vindo ao Rei da Fofulandia, {nome}!\n")
    print("Você está em direção ao Castelo do Rei da Fofura, e passará por inúmeras aventuras até chegar lá.")
    print("Há três passagens que lhe levarão a lugares desconhecidos em prol da tentativa de chegar ao castelo.\n")
    print("1. Virar a esquerda e entrar na caverna do Dr. Sorriso - o mestre dos experimentos do Reino.")
    print("2. Seguir em frente e explorar os terrenos desconhecidos do reino.")
    print("3. Virar a direita e tentar subir a Colina dos Doces Gelados.\n")

def escolha_fase_1():
    while True:
        resposta = input("Digite a opção que você deseja (1-3): ")
        if resposta.isdigit() and 1 <= int(resposta) <= 3:
            return int(resposta)
        print("Opção inválida! Digite um número de 1 a 3.")

def fase_1_caverna_dr_sorriso():
    print("Você entrou na caverna do Dr. Sorriso. Ele te dá um abraço bem forte, mas te olha com um sorriso malicioso.")
    resposta = input("Dr. Sorriso diz que está precisando solucionar um grande mistério que está acontecendo no Reino.\nVocê quer ajudá-lo? Sim ou não (s/n)? ").lower()
    
    if resposta == 's':
        print("Você aceitou ajudar o Dr. Sorriso. Ele sorri maleficamente para você, te pega à força e te põe numa cela com um dragão.")
        print("O dragão come você. Você perdeu!")
    elif resposta == 'n':
        print("Você não aceita a proposta do Dr. Sorriso e ele decide lutar contra você.")
        print("Você luta contra o Dr. Sorriso e vence a batalha.")
        print("Você sai da caverna, volta para o percurso principal e dessa vez segue apenas em frente.")
        fase_3_ponte()
    else:
        print("Opção inválida! Digite 's' para aceitar ajudar o Dr. Sorriso ou 'n' para não aceitar a sua proposta.")

def fase_3_ponte():
    resposta = input("Você encontra uma ponte cheia de lixos tóxicos. Se tocar neles, você será contaminado por vírus mortais e morrerá.\nVocê passará pela ponte? Sim ou não (s/n)? ").lower()
    
    if resposta == 's':
        print("Ao tentar passar pelos obstáculos na ponte, você toca em um objeto radioativo e morre. Você perdeu!")
    elif resposta == 'n':
        print("Você permanece no local e é atacado e morto por Ursos da Fofura Malvada. Você perdeu!")
    else:
        print("Opção inválida! Digite 's' para passar pelos obstáculos da ponte ou 'n' para permanecer no local.")

def fase_1_seguir_em_frente():
    print("Você segue em frente e vê uma ponte com alguns obstáculos capazes de matar-lhe.")
    resposta = input("Escolha uma das opções abaixo:\n1. Passar pelos obstáculos da ponte.\n2. Permanecer no local\nOpção: ")
    
    if resposta == '1':
        print("Ao passar pela ponte, você encontra um estranho no caminho.")
        resposta = input("Você aceita conversar com o estranho? Sim ou não (s/n)? ").lower()
        
        if resposta == 's':
            print("O 'estranho' era o Rei do Reino da Fofulandia.")
            print("O rei te levou para a passagem secreta do reino que te leva ao Castelo do Rei.")
            print("Você venceu!")
        elif resposta == 'n':
            print("Você decide não conversar com o estranho e continua sua jornada.")
            print("Você é atacado por criaturas desconhecidas e morre. Você perdeu!")
        else:
            print("Opção inválida! Digite 's' para conversar com o estranho ou 'n' para ignorá-lo.")
    elif resposta == '2':
        print("Você permanece no local e é atacado e morto por Ursos da Fofura Malvada. Você perdeu!")
    else:
        print("Opção inválida! Digite '1' para se aventurar na ponte ou '2' para permanecer no local.")

def fase_1_colina_doces_gelados():
    print("Você não consegue escalar a Colina dos Doces Gelados e acaba caindo. Você perdeu!")

def main():
    nome = obter_nome()
    apresentar_jogo(nome)
    
    resposta = escolha_fase_1()
    
    if resposta == 1:
        fase_1_caverna_dr_sorriso()
    elif resposta == 2:
        fase_1_seguir_em_frente()
    elif resposta == 3:
        fase_1_colina_doces_gelados()

if __name__ == "__main__":
    main()
