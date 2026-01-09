import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [formData, setFormData] = useState({
    fullName: '',
    guests: '1',
    drink: '',
    dietary: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за подтверждение! 💕",
      description: "Мы получили ваш ответ. До встречи на празднике!",
    });
    setFormData({ fullName: '', guests: '1', drink: '', dietary: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFDEE2] via-[#E5DEFF] to-[#FDE1D3]">
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="w-full max-w-md mx-4 p-8 border-none shadow-2xl bg-white/95 backdrop-blur animate-scale-in">
            <div className="flex flex-col items-center gap-4 py-4">
              <div className="text-6xl">💐</div>
              <h2 className="text-4xl font-light text-primary">Дима & Лиза</h2>
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <p className="text-lg text-muted-foreground font-normal text-center">
                Приглашают вас на торжество
              </p>
            </div>
            <div className="text-center pt-4">
              <Button onClick={() => setShowWelcome(false)} size="lg" className="rounded-full">
                Открыть приглашение
              </Button>
            </div>
          </Card>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <div className="text-7xl mb-4">💕</div>
          </div>
          <h1 className="text-6xl md:text-7xl font-light text-primary mb-4">
            Дима & Лиза
          </h1>
          <div className="h-px w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6" />
          <p className="text-xl text-foreground/80">15 августа 2026</p>
        </header>

        <section id="rsvp" className="max-w-2xl mx-auto mb-20 animate-fade-in">
          <Card className="p-8 bg-white/90 backdrop-blur shadow-xl border-none">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-light text-primary mb-4">Подтверждение</h2>
              <p className="text-muted-foreground">
                Будем рады видеть вас на нашем празднике
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullName" className="text-base">Ваше ФИО</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="mt-2"
                  placeholder="Иван Иванович Иванов"
                />
              </div>

              <div>
                <Label className="text-base mb-3 block">Количество гостей</Label>
                <RadioGroup value={formData.guests} onValueChange={(value) => setFormData({ ...formData, guests: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="guest1" />
                    <Label htmlFor="guest1" className="font-normal cursor-pointer">Приду один</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="guest2" />
                    <Label htmlFor="guest2" className="font-normal cursor-pointer">Приду с парой</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="family" id="guestFamily" />
                    <Label htmlFor="guestFamily" className="font-normal cursor-pointer">Приду с семьей</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base mb-3 block">Какой напиток предпочитаете?</Label>
                <RadioGroup value={formData.drink} onValueChange={(value) => setFormData({ ...formData, drink: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wine" id="wine" />
                    <Label htmlFor="wine" className="font-normal cursor-pointer">🍷 Вино</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="champagne" id="champagne" />
                    <Label htmlFor="champagne" className="font-normal cursor-pointer">🥂 Шампанское</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whiskey" id="whiskey" />
                    <Label htmlFor="whiskey" className="font-normal cursor-pointer">🥃 Крепкие напитки</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="nonalcoholic" id="nonalcoholic" />
                    <Label htmlFor="nonalcoholic" className="font-normal cursor-pointer">🥤 Безалкогольные</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="dietary" className="text-base">Диетические ограничения</Label>
                <Input
                  id="dietary"
                  value={formData.dietary}
                  onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                  className="mt-2"
                  placeholder="Вегетарианство, аллергии..."
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-base">Пожелания молодоженам</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-24"
                  placeholder="Ваши теплые слова..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full text-lg">
                Подтвердить участие 💝
              </Button>
            </form>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-center text-primary mb-12">Программа торжества</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🕐</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">14:00</h3>
                  <p className="text-muted-foreground">Сбор гостей и фуршет</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💍</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">15:00</h3>
                  <p className="text-muted-foreground">Церемония бракосочетания</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📸</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">16:00</h3>
                  <p className="text-muted-foreground">Фотосессия и прогулка</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🍽️</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">17:30</h3>
                  <p className="text-muted-foreground">Праздничный банкет</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🎊</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">19:00</h3>
                  <p className="text-muted-foreground">Развлекательная программа</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-white/90 backdrop-blur border-none shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💃</div>
                <div>
                  <h3 className="text-2xl font-light text-primary mb-2">20:00</h3>
                  <p className="text-muted-foreground">Танцы до утра</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-center text-primary mb-12">Место проведения</h2>
          <Card className="p-8 bg-white/90 backdrop-blur border-none shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <h3 className="text-2xl font-light text-primary mb-2">Ресторан "Романтика"</h3>
                    <p className="text-muted-foreground">
                      г. Москва, ул. Пушкина, д. 10
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Icon name="Map" size={48} className="mx-auto mb-2" />
                  <p>Карта расположения</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-center text-primary mb-12">Дресс-код</h2>
          <Card className="p-8 bg-white/90 backdrop-blur border-none shadow-xl text-center">
            <div className="text-6xl mb-6">👔👗</div>
            <h3 className="text-3xl font-light text-primary mb-4">Элегантный вечерний</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы будем рады видеть вас в элегантных нарядах. 
              Цветовая гамма торжества: нежные пастельные тона — розовый, лавандовый, персиковый.
            </p>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <h2 className="text-5xl font-light text-center text-primary mb-12">Наша история</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden bg-white/90 backdrop-blur border-none shadow-lg">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Heart" size={64} className="text-primary/40" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-muted-foreground">
                    {i === 1 && "Наша первая встреча"}
                    {i === 2 && "Романтическое путешествие"}
                    {i === 3 && "Предложение руки и сердца"}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="max-w-2xl mx-auto mb-12 animate-fade-in">
          <Card className="p-8 bg-white/90 backdrop-blur border-none shadow-xl text-center">
            <h2 className="text-4xl font-light text-primary mb-6">Контакты</h2>
            <p className="text-muted-foreground mb-4">
              По всем вопросам обращайтесь к организаторам:
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3">
                <Icon name="User" className="text-primary" />
                <span>Мария (свидетельница): +7 (999) 111-22-33</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="User" className="text-primary" />
                <span>Сергей (свидетель): +7 (999) 444-55-66</span>
              </div>
            </div>
          </Card>
        </section>

        <footer className="text-center py-8 text-muted-foreground">
          <p className="text-lg">До встречи на нашем празднике! 💕</p>
        </footer>
      </div>
    </div>
  );
}