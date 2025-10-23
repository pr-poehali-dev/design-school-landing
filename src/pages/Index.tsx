import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30">
      
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Icon name="Palette" size={24} className="text-white" />
          </div>
          <span className="font-heading font-bold text-xl">#DESIGNSCHOOL</span>
        </div>
        <Button variant="outline" className="rounded-full">
          Связаться
        </Button>
      </header>

      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              Старт карьеры в дизайне
            </div>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight">
              СТАНЬ <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                UI/UX
              </span>
              <br />
              ДИЗАЙНЕРОМ
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Освой востребованную профессию с нуля за 6 месяцев. Практика с первого дня, реальные проекты в портфолио.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                Начать обучение
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Программа курса
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://v3b.fal.media/files/b/zebra/XIgOBgzlgsO9acb-j8yCI_output.png"
              alt="UI/UX Designer"
              className="relative rounded-3xl w-full animate-float"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 bg-gradient-to-br from-primary to-secondary rounded-3xl my-20 text-white">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl">
            Почему UI/UX дизайн?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Статистика не врёт — это одна из самых быстрорастущих профессий
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "87%", label: "рост спроса на дизайнеров за 2 года", icon: "TrendingUp" },
            { value: "150К+", label: "средняя зарплата дизайнера", icon: "Wallet" },
            { value: "3x", label: "больше вакансий, чем специалистов", icon: "Users" },
            { value: "92%", label: "трудоустройство выпускников", icon: "Target" },
          ].map((stat, idx) => (
            <Card 
              key={idx} 
              className="p-6 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                <Icon name={stat.icon as any} size={24} className="text-white" />
              </div>
              <div className="font-heading font-bold text-4xl mb-2">{stat.value}</div>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-2">
                Профессия будущего
              </h3>
              <p className="text-white/80">
                По данным LinkedIn, UI/UX дизайн входит в топ-5 самых востребованных навыков 2024 года. 
                Каждый месяц появляются тысячи новых вакансий, а компании активно ищут талантливых дизайнеров.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full text-accent font-medium text-sm mb-4">
                Легкий старт
              </div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
                Начать обучение — проще, чем кажется
              </h2>
              <p className="text-lg text-muted-foreground">
                Не нужно быть художником или программистом. Мы научим всему с нуля.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "CheckCircle",
                  title: "Без опыта — не проблема",
                  description: "90% наших студентов начинают с нуля"
                },
                {
                  icon: "Clock",
                  title: "Гибкий график",
                  description: "Учитесь в удобное время, совмещайте с работой"
                },
                {
                  icon: "Users",
                  title: "Живое комьюнити",
                  description: "Поддержка кураторов 24/7 и активное комьюнити"
                },
                {
                  icon: "Briefcase",
                  title: "Помощь с трудоустройством",
                  description: "Карьерный центр и подготовка к собеседованиям"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors animate-slide-up"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as any} size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary">
              Узнать подробнее
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl"></div>
            <Card className="relative p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-heading font-bold text-xl">Программа курса</div>
                  <div className="text-sm text-muted-foreground">6 месяцев • Online</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Основы дизайна и композиции",
                  "Figma от А до Я",
                  "UX исследования и аналитика",
                  "UI дизайн и интерфейсы",
                  "Прототипирование и тестирование",
                  "Портфолио и кейсы"
                ].map((module, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-sm">{module}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
              Результаты
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              Чему ты научишься
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Практические навыки, которые сразу применишь в работе
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "Figma",
                title: "Figma Pro",
                description: "Создавать профессиональные макеты, компоненты и дизайн-системы",
                color: "from-purple-500 to-blue-500",
                shape: "rounded-3xl rotate-3"
              },
              {
                icon: "Search",
                title: "UX Research",
                description: "Проводить исследования, создавать CJM и анализировать поведение пользователей",
                color: "from-blue-500 to-cyan-500",
                shape: "rounded-3xl -rotate-2"
              },
              {
                icon: "Palette",
                title: "UI Design",
                description: "Разрабатывать красивые и функциональные интерфейсы с вниманием к деталям",
                color: "from-pink-500 to-rose-500",
                shape: "rounded-3xl rotate-2"
              },
              {
                icon: "Layout",
                title: "Прототипирование",
                description: "Создавать интерактивные прототипы и проводить юзабилити-тестирование",
                color: "from-orange-500 to-amber-500",
                shape: "rounded-3xl -rotate-1"
              },
              {
                icon: "Layers",
                title: "Дизайн-системы",
                description: "Разрабатывать масштабируемые системы для крупных продуктов",
                color: "from-green-500 to-emerald-500",
                shape: "rounded-3xl rotate-1"
              },
              {
                icon: "Briefcase",
                title: "Портфолио",
                description: "Оформлять кейсы и презентовать свои проекты работодателям",
                color: "from-indigo-500 to-purple-500",
                shape: "rounded-3xl -rotate-2"
              }
            ].map((skill, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 blur-xl ${skill.shape} group-hover:opacity-30 transition-opacity`}></div>
                <Card 
                  className={`relative p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 animate-scale-in group bg-white/80 backdrop-blur-sm border-2 hover:border-primary/50 ${skill.shape}`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} ${skill.shape} blur-md opacity-50`}></div>
                    <div className={`relative w-20 h-20 ${skill.shape} bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                      <Icon name={skill.icon as any} size={36} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-2xl mb-3">{skill.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  
                  <div className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${skill.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                </Card>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-20">
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/2e64ba3a-1309-4469-b2af-d6e34cd6270b/files/eaeb0c08-f553-4c98-af91-24f1515941b4.jpg"
                alt="Design Skills"
                className="relative rounded-3xl w-full shadow-2xl animate-float"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full blur-2xl opacity-60 animate-pulse"></div>
            </div>

            <div className="space-y-6">
              <div className="inline-block p-4 bg-gradient-to-br from-primary to-secondary rounded-2xl animate-scale-in">
                <Icon name="Award" size={48} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-3xl md:text-4xl">
                Реальные проекты<br />в твоём портфолио
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждый модуль завершается созданием полноценного проекта. К концу курса у тебя будет 
                <span className="font-bold text-primary"> портфолио из 6+ кейсов</span>, которое впечатлит любого работодателя.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                  <div className="font-heading font-bold text-3xl text-primary mb-1">6+</div>
                  <div className="text-sm text-muted-foreground">проектов в портфолио</div>
                </div>
                <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                  <div className="font-heading font-bold text-3xl text-accent mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">практических заданий</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full h-full">
              <img 
                src="https://cdn.poehali.dev/projects/2e64ba3a-1309-4469-b2af-d6e34cd6270b/files/45c2fb10-5b3a-4f69-9421-7861fc8634c9.jpg"
                alt="Shapes"
                className="w-full h-full object-contain opacity-20 animate-float"
                style={{ animationDuration: '5s' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <Card className="p-12 md:p-16 bg-gradient-to-br from-primary via-secondary to-accent text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <Icon name="Sparkles" size={20} />
              <span className="font-medium">Старт уже в декабре</span>
            </div>
            
            <h2 className="font-heading font-bold text-4xl md:text-6xl">
              Готов начать свой путь?
            </h2>
            
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Присоединяйся к комьюнити из 2000+ дизайнеров и получи профессию мечты
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="rounded-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Записаться на курс
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full border-white text-white hover:bg-white/10"
              >
                Скачать программу
                <Icon name="Download" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Palette" size={18} className="text-white" />
            </div>
            <span className="font-heading font-bold">#DESIGNSCHOOL</span>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">О школе</a>
            <a href="#" className="hover:text-primary transition-colors">Программа</a>
            <a href="#" className="hover:text-primary transition-colors">Преподаватели</a>
            <a href="#" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          
          <div className="flex gap-3">
            <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
              <Icon name="Send" size={18} />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
              <Icon name="MessageCircle" size={18} />
            </Button>
            <Button size="icon" variant="outline" className="rounded-full w-10 h-10">
              <Icon name="Mail" size={18} />
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © 2024 Design School. Все права защищены.
        </div>
      </footer>
    </div>
  );
};

export default Index;