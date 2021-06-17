const utils = require("../utils");

function page(req) {
  const flag = "cararraCTF{curl_h4s_t00_mAny_optIOns}";
  const cookie_types = {
    "Aachener Printen": 17,
    Abernethy: 10,
    "Afghan biscuits": 20,
    Alfajor: 16,
    "Almond biscuit": 9,
    "Amaretti di Saronno": 16,
    "Animal cracker": 9,
    "ANZAC biscuit": 6,
    Aparon: 10,
    Apas: 12,
    "Apple cider cookie": 16,
    "Baci di dama": 17,
    Turkish: 12,
    Barquillo: 14,
    Barquiron: 13,
    "Bath Oliver": 9,
    "Berger Cookie": 12,
    "Berner Haselnusslebkuchen": 10,
    "Berner Honiglebkuchen": 16,
    Biscocho: 12,
    Biscotti: 13,
    Biscuit: 15,
    "Biscuit roll": 7,
    Bizcochito: 9,
    "Black and white cookie": 12,
    Boortsog: 14,
    "Bourbon biscuit": 12,
    Bredela: 19,
    Broas: 15,
    "Butter cookie": 14,
    "Butter pecan": 7,
    "Camachile cookie": 9,
    "Caramel shortbread": 12,
    "Carrot cake cookie": 13,
    "Cat's tongue cookie": 8,
    Cavallucci: 13,
    Caycay: 12,
    "Charcoal biscuit": 15,
    "Chocolate biscuit": 5,
    "Chocolate chip cookie": 14,
    "Chocolate-coated marshmallow treats": 12,
    "Christmas cookies": 9,
    "Coconut macaroon": 6,
    "Cornish fairings": 20,
    Coyotas: 15,
    "Cream cracker": 7,
    Cuccidati: 20,
    "Custard cream": 19,
    "Digestive biscuit": 11,
    "Dutch letter": 15,
    "Empire biscuit": 12,
    "Fig roll": 15,
    "Florentine Biscuit": 18,
    "Flour kurabiye": 6,
    "Fortune cookie": 13,
    "Fudge cookie": 5,
    "Galletas de bato": 5,
    "Galletas de patatas": 13,
    "Galletas del Carmen": 5,
    "Galletas pesquera": 10,
    "Garibaldi biscuit": 19,
    Ghorabiye: 5,
    Ghoriba: 10,
    Gingerbread: 15,
    "Gingerbread man": 17,
    "Ginger snaps": 11,
    "Half-moon cookie": 17,
    Hamantash: 6,
    Jacobina: 10,
    "Jammie Dodgers": 17,
    "Joe Frogger": 12,
    Jodenkoek: 12,
    Jumble: 12,
    Kaasstengels: 12,
    Kahk: 10,
    Khapse: 11,
    Kichel: 9,
    Kleicha: 5,
    Koulourakia: 5,
    Kourabiedes: 5,
    Krumiri: 6,
    Krumkake: 7,
    "Kue gapit": 10,
    "Kue satu": 16,
    "Lady Finger (cookie)": 17,
    Lebkuchen: 17,
    "Lengua de gato": 11,
    "Lincoln biscuit": 7,
    Linga: 10,
    "Ma'amoul": 15,
    Macaroon: 15,
    Macaron: 15,
    "Malted milk (biscuit)": 20,
    "Maple leaf cream cookies": 17,
    "Marie biscuit": 8,
    "Masa podrida": 16,
    "Moravian spice cookies": 11,
    "Nice biscuit": 14,
    "Nocciolini di Canzo": 19,
    "Oat crisps": 17,
    "Oatmeal raisin": 16,
    Oreo: 15,
    Otap: 12,
    Paciencia: 5,
    Paborita: 17,
    Panellets: 19,
    Paprenjak: 11,
    "Party ring": 12,
    "Peanut butter cookie": 18,
    "Petit-Beurre": 13,
    Pepernoten: 6,
    Piaya: 16,
    "Pignolo (macaroon)": 9,
    "Pinwheel cookies": 16,
    Pizzelle: 15,
    "Puto seco": 17,
    "Putri salju": 7,
    "Rainbow cookie": 10,
    "Reshteh Khoshkar": 20,
    Ricciarelli: 15,
    "Rich tea": 7,
    Rosca: 14,
    Rosette: 5,
    Rosquillo: 8,
    "Rum ball": 17,
    "Russian tea cake": 20,
    "Sandwich cookie": 7,
    Semprong: 14,
    Shortbread: 13,
    Silvana: 13,
    Snickerdoodle: 11,
    Speculaas: 6,
    Springerle: 19,
    Stroopwafel: 15,
    "Sugar cookie": 7,
    "Tahini cookie": 14,
    Tareco: 7,
    Teiglach: 19,
    Tirggel: 5,
    "Toll House Cookie": 6,
    "Ube crinkles": 19,
    "Ugoy-ugoy": 16,
    Vanillekipferl: 6,
    Wafer: 9,
    Wibele: 13,
  };

  const html = `

<!DOCTYPE html>
<html>
<head>
<title>curling-2</title>
</head>
<body>

<h1>Bob's cookie list</h1>
<p>Bob will only send you the flag if you add the right amount of each cookie to your browser's cookie jar, each spelled exactly as it shows up in the table (parentheses, capitalization, and all). You probably don't want to do it by hand...</p>
<table>
<thead>
<tr>
<th> Name </th>
<th> Origin </th>
<th> Description </th>
<th> Quantity </th>
</tr>
</thead>
<tbody>
<tr><td>Aachener Printen</td><td>Germany (Aachen)</td><td>Aachener Printen are a type of Lebkuchen. The term is a protected designation of origin and so all manufacturers can be found in or near Aachen. Printen are made from a variety of ingredients including cinnamon, aniseed, clove, cardamom, coriander, allspice and also ginger.</td><td>17</td></tr>
<tr><td>Abernethy</td><td>United Kingdom (Scotland)</td><td>Invented by Scottish doctor John Abernethy in the 18th century as a digestive. An adaptation of the plain captain’s biscuit or hardtack, with the added ingredients of sugar (for energy), and caraway seeds.</td><td>10</td></tr>
<tr><td>Afghan biscuits</td><td>New Zealand</td><td>Traditional New Zealand biscuit and is made from cocoa powder, butter, flour and cornflakes. It is then topped with chocolate icing and half a walnut. The origin of the recipe seems to be New Zealand but the name while unknown, is likely derived from a 1920s colour description 'Afghan/Afghanistan Brown. The recipe has appeared in many editions of cookbooks sold in New Zealand.</td><td>20</td></tr>
<tr><td>Alfajor</td><td>South America, Philippines</td><td>Basic form consists of two round sweet biscuits joined together with dulce de leche or jam and covered with powdered sugar. In most alfajores there are two layers of cake, and a filling in between.</td><td>16</td></tr>
<tr><td>Almond biscuit</td><td>Macau</td><td>Small biscuits with no filling by default, with a crunchy texture, but sometimes crumbling on first bite. When they are sold in different countries, they are usually imported from Macau, where it is one of the most popular specialty products.</td><td>9</td></tr>
<tr><td>Amaretti di Saronno</td><td>Italy (Saronno)</td><td>Italian biscuit similar to macaroons with a bitter ("amaro") aftertaste</td><td>16</td></tr>
<tr><td>Animal cracker</td><td>United States (New York City)</td><td>Small cracker or cookie baked in a shape of an animal, especially a lion, tiger, bear, or elephant.</td><td>9</td></tr>
<tr><td>ANZAC biscuit</td><td>AustraliaNew Zealand</td><td>ANZAC Biscuits are a sweet biscuit made using rolled oats, flour, coconut, sugar, butter, golden syrup, bicarbonate of soda and boiling water. Named after the Australian and New Zealand Army Corps (ANZAC)</td><td>6</td></tr>
<tr><td>Aparon</td><td>Philippines</td><td>Filipino wafers drizzled with caramelized sugar and optionally, sesame seeds.</td><td>10</td></tr>
<tr><td>Apas</td><td>Philippines</td><td>Apas are oblong-shaped biscuits that are topped with sugar. Apas is a Tagalog term for wafer. They are a popular part of Filipino cuisine.</td><td>12</td></tr>
<tr><td>Apple cider cookie</td><td></td><td>A cookie that is prepared and flavored with apple cider.</td><td>16</td></tr>
<tr><td>Baci di dama</td><td>Northern Italy</td><td>Northern Italian sandwich cookie</td><td>17</td></tr>
<tr><td>Turkish</td><td>Albania (Elbasan)</td><td>Traditional Albanian dessert made of cornflour, butter and vanilla. This dessert is eaten on Spring Day (14 March).</td><td>12</td></tr>
<tr><td>Barquillo</td><td>Spain</td><td>A crispy rolled or folded wafer pastry originating from Spain. It was spread to Spanish colonies in the Americas and the Philippines, from there entering the cuisines of neighboring Asian countries as "biscuit rolls", "egg rolls", or "love letters".</td><td>14</td></tr>
<tr><td>Barquiron</td><td>Philippines</td><td>Variant of barquillos filled with polvoron from the Philippines.</td><td>13</td></tr>
<tr><td>Bath Oliver</td><td>United Kingdom (Bath, England)</td><td>Hard dry biscuit made from flour, butter, yeast and milk and often eaten with cheese. It was invented by Dr William Oliver of Bath, around the year of 1750.</td><td>9</td></tr>
<tr><td>Berger Cookie</td><td>Germany</td><td>Buttery vanilla wafer topped with thick creamy fudge. The recipe is derived from Germany and are an iconic cultural icon of Baltimore. The recipe was first brought to the US from Germany by George and Henry Berger in 1835.</td><td>12</td></tr>
<tr><td>Berner Haselnusslebkuchen</td><td>Switzerland (Bern)</td><td>Traditional Christmas cake from Berne in Switzerland, made from ground hazelnuts. It is sometimes confused with another Bernese speciality, Berner Honiglebkuchen, due to its similar appearance.</td><td>10</td></tr>
<tr><td>Berner Honiglebkuchen</td><td>Switzerland (Bern)</td><td>Traditional Christmas cookies made with honey. It is distinguished from Berner Haselnusslebkuchen as it often has more elaborate sugar decorations.</td><td>16</td></tr>
<tr><td>Biscocho</td><td>Philippines</td><td>Twice-baked bread from the Philippines with numerous variations.</td><td>12</td></tr>
<tr><td>Biscotti</td><td>Italy</td><td>In North America, the term refers to a specific type of biscuits, derived from Tuscan cantucci, a type of hard almond-flavored biscuits traditionally served with vin santo.</td><td>13</td></tr>
<tr><td>Biscuit</td><td>Unknown</td><td>In the US: small soft leavened bread (scone)In the British Commonwealth: a small and hard, often sweet, baked product with different types of decorations, flavors and toppings. (cookie)</td><td>15</td></tr>
<tr><td>Biscuit roll</td><td>Spain</td><td>Derivative of barquillos. Biscuit snack commonly found in Asia. It is crunchy and can be easily broken into pieces. Made of wheat flour, butter, egg, sugar and vanilla flavor. The traditional Chinese characters (蛋卷) are same for "egg roll".</td><td>7</td></tr>
<tr><td>Bizcochito</td><td>United States (New Mexico)</td><td>Crispy butter cookie flavored with anise and cinnamon. It is served during special celebrations, such as wedding receptions, baptisms, and religious holidays. It is usually eaten with morning coffee or milk.</td><td>9</td></tr>
<tr><td>Black and white cookie</td><td>United States (New York City; Utica, New York)</td><td>Iced on one half with vanilla and on the other with chocolate as to resemble a half moon.</td><td>12</td></tr>
<tr><td>Boortsog</td><td>Central Asia</td><td>Made by deep-frying small pieces of a flattened dough. Often eaten as a dessert, with sugar, butter, or honey. Mongolians sometimes dip boortsog in tea.</td><td>14</td></tr>
<tr><td>Bourbon biscuit</td><td>United Kingdom (London, England)</td><td>Sandwich biscuit consisting of two thin oblong dark chocolate biscuits with a chocolate fondant filling. The biscuit was introduced in 1910, originally under the name "Creola" by the Bermondsey biscuit company in London.</td><td>12</td></tr>
<tr><td>Bredela</td><td>France (Alsace)</td><td>Many varieties can include anisbredela (cake with egg white and aniseed) butterbredle, schwowebredle (orange and cinnamon), spritzbredle, small pain d'épices and spice cakes that are made with sugar rather than honey.</td><td>19</td></tr>
<tr><td>Broas</td><td>Philippines</td><td>Filipino ladyfinger biscuits</td><td>15</td></tr>
<tr><td>Butter cookie</td><td>Unknown</td><td>Unleavened cookies consisting of butter, flour and sugar. They are often categorized as a "crisp cookie" due to their texture, which is a result of specific quantities of flour and sugar being used. They are often flavored with vanilla, chocolate and coconut.</td><td>14</td></tr>
<tr><td>Butter pecan</td><td>United States</td><td>Cookie made with roasted pecans, butter, and vanilla flavor</td><td>7</td></tr>
<tr><td>Camachile cookie</td><td>Philippines</td><td>Filipino ladyfinger cookies that are characteristically shaped like the fruits of the camachile tree (Pithecellobium dulce).</td><td>9</td></tr>
<tr><td>Caramel shortbread</td><td>Australia</td><td>Rectangular shortbread based biscuit that consists of layers of caramel and chocolate. It is commonly known as caramel shortcake, caramel squares, caramel slice, or millionaires' shortbread. The term Millionaire originated in Scotland where it is also popular.[1]</td><td>12</td></tr>
<tr><td>Carrot cake cookie</td><td></td><td>Prepared with ingredients that provide a flavor and texture similar to carrot cake</td><td>13</td></tr>
<tr><td>Cat's tongue cookie</td><td>Europe and Indonesia</td><td>A sweet and crunchy cookie prepared in the shape of a cat's tongue.</td><td>8</td></tr>
<tr><td>Cavallucci</td><td>Italy</td><td>Chewy anise biscuit that contains almonds, candied fruits, coriander, flour and uses Tuscan millefiori honey. The version of these cookies sold today is similar to a pastry which was originally served to servants who worked in the stables of rich Italian aristocrats.</td><td>13</td></tr>
<tr><td>Caycay</td><td>Philippines</td><td>A Filipino crunchy layered cookie coated in syrup (latik) or honey and rolled in coarsely ground toasted peanuts.</td><td>12</td></tr>
<tr><td>Charcoal biscuit</td><td>United Kingdom (England)</td><td>Biscuit based on a powdered willow charcoal or activated carbon mixed with ordinary flour, and made into dough with butter, sugar and eggs. They were originally made to cure stomach trouble and are nowadays enjoyed with cheeses.</td><td>15</td></tr>
<tr><td>Chocolate biscuit</td><td>United Kingdom</td><td>One of several types of biscuit not containing chocolate, such as a Digestive biscuit or Shortbread, coated with chocolate on one side or sometimes entirely encased in chocolate. They can be round, rectangular or finger-shaped. These differ from biscuits such as the Bourbon biscuit and the Chocolate chip cookie which contain chocolate in the biscuit itself.</td><td>5</td></tr>
<tr><td>Chocolate chip cookie</td><td>United States (Whitman, Massachusetts)</td><td>A drop cookie which features chocolate chips as its distinguishing ingredient, also containing flour, shortening, eggs, and sugar. Variations include recipes with other types of chocolate or additional ingredients, such as nuts or oatmeal.</td><td>14</td></tr>
<tr><td>Chocolate-coated marshmallow treats</td><td>Scotland</td><td>Tunnock's teacake is made with a shortbread base topped with marshmallow and coated in chocolate. There are regional variations.</td><td>12</td></tr>
<tr><td>Christmas cookies</td><td>Europe</td><td>Sugar biscuits and cookies from various types of doughs. They all have in common that they are shaped and decorated in a way that has something to do with Christmas and its traditions. See also Gingerbread, Pfeffernüsse, Springerle and sugar cookies.</td><td>9</td></tr>
<tr><td>Coconut macaroon</td><td>Europe</td><td>Cookies that consist of a paste of egg whites with coconut that is placed on a wafer and then baked. Its main ingredients are egg whites, sugar and shredded dried coconut. It is closer to a soft cookie than its meringue cousin, and is equally as sweet.</td><td>6</td></tr>
<tr><td>Cornish fairings</td><td>United Kingdom (Cornwall)</td><td>Soft, chewy biscuits flavored with ginger</td><td>20</td></tr>
<tr><td>Coyotas</td><td>Mexico</td><td>Large flat cookies usually made with brown sugar.</td><td>15</td></tr>
<tr><td>Cream cracker</td><td>Ireland</td><td>a flat, usually square savoury biscuit often eaten with cheese</td><td>7</td></tr>
<tr><td>Cuccidati</td><td>Italy (Sicily)</td><td>Fig-stuffed cookie traditionally served around Christmas time</td><td>20</td></tr>
<tr><td>Custard cream</td><td>United Kingdom</td><td>Vanilla fondant sandwiched between two plain biscuits.</td><td>19</td></tr>
<tr><td>Digestive biscuit</td><td>United Kingdom</td><td>Semi-sweet biscuit that typically contains coarse brown wheat flour (which gives it its distinctive texture and flavor), sugar, malt extract, vegetable oil, wholemeal, raising agents and salt. Usually consumed for tea. Sometimes sold under the name Hovis biscuit.</td><td>11</td></tr>
<tr><td>Dutch letter</td><td>Netherlands</td><td>Typically prepared using flour, eggs and butter or puff pastry as its base and filled with almond paste, dusted with sugar and shaped in an "S" or other letter shape. It was introduced into the United States by Dutch immigrants in the mid 19th century.</td><td>15</td></tr>
<tr><td>Empire biscuit</td><td>United Kingdom</td><td>Typical Empire Biscuit has a layer of jam in between two biscuits. The top is covered with white water icing, usually decorated with a glace cherry in the centre.</td><td>12</td></tr>
<tr><td>Fig roll</td><td>Ancient Egypt[citation needed]</td><td>A biscuit filled with fig paste that dates back to ancient Egypt.[citation needed] Also known by their trademarked name in the US as "Fig Newtons"</td><td>15</td></tr>
<tr><td>Florentine Biscuit</td><td>Italy (Florence)</td><td>Chocolate base topped with candied fruit and nuts.</td><td>18</td></tr>
<tr><td>Flour kurabiye</td><td>Turkey</td><td>Butter and flour base topped with an almond or other nuts.</td><td>6</td></tr>
<tr><td>Fortune cookie</td><td>United States</td><td>Folded sheet sweet cookie with a "fortune" (an aphorism or a vague prophecy) written on a paper slip inside.</td><td>13</td></tr>
<tr><td>Fudge cookie</td><td></td><td>A cookie prepared with fudge or that has the flavor, consistency or texture of fudge.</td><td>5</td></tr>
<tr><td>Galletas de bato</td><td>Philippines</td><td>Flat disc-shaped cookies from the Philippines</td><td>5</td></tr>
<tr><td>Galletas de patatas</td><td>Philippines</td><td>Square shaped biscuits from the Philippines</td><td>13</td></tr>
<tr><td>Galletas del Carmen</td><td>Philippines</td><td>Crenelated disc-shaped cookies from the Philippines</td><td>5</td></tr>
<tr><td>Galletas pesquera</td><td>Philippines</td><td>Thin disc-shaped crackers from the Philippines</td><td>10</td></tr>
<tr><td>Garibaldi biscuit</td><td>United Kingdom</td><td>Currants sandwiched between two oblong biscuits</td><td>19</td></tr>
<tr><td>Ghorabiye</td><td>Iran</td><td>Made of almond flour, sugar, egg white, vanilla, margarine and pistachio.</td><td>5</td></tr>
<tr><td>Ghoriba</td><td>Maghreb, Middle East</td><td>Made with flour, sugar, butter, and often almonds</td><td>10</td></tr>
<tr><td>Gingerbread</td><td>Europe</td><td>Commonly a soft dough cookie that is made with potassium carbonate and/or baker's ammonia instead of yeast, flavored with ginger and other ingredients such as nuts and succade.</td><td>15</td></tr>
<tr><td>Gingerbread man</td><td>Europe</td><td>Made of gingerbread and shaped like flat male figures.</td><td>17</td></tr>
<tr><td>Ginger snaps</td><td>Unknown</td><td>Hard twice-baked biscuits that are flavored with powdered ginger, cinnamon, nutmeg, and other spices, but predominantly ginger. They are also known as Ginger biscuits, Ginger thins or "Ginger Nuts" (a term popular for them in the United Kingdom). They are called "brunkage" in Danish (literally meaning "brown biscuits"), pepparkakor in Swedish, piparkakut in Finnish, piparkūkas in Latvian, piparkoogid in Estonian and pepperkaker in Norwegian (literally, pepper cookies). They may be rectangular or disc-shaped in shape (when they are called "ginger nuts", they are normally circular in shape).</td><td>11</td></tr>
<tr><td>Half-moon cookie</td><td>Philippines</td><td>Filipino semicircle or crescent-shaped butter cookies. Not to be confused with the black and white cookie.</td><td>17</td></tr>
<tr><td>Hamantash</td><td>Jewish (Ashkenazi)</td><td>Triangular cookie featured in holiday of Purim. Shape is associated with Haman, a biblical villain, and his ears or hat. Fruit, cheese, poppyseed or other sweets are used as a filling.</td><td>6</td></tr>
<tr><td>Jacobina</td><td>Philippines</td><td>Thick square biscuits from the Philippines</td><td>10</td></tr>
<tr><td>Jammie Dodgers</td><td>United Kingdom</td><td>Jam sandwiched between two biscuits, with a heart in the middle.</td><td>17</td></tr>
<tr><td>Joe Frogger</td><td>Massachusetts, United States</td><td>Invented by a former black slave sometime in the late 1700s, but still a popular recipe today. Recipe is a rolled cookie containing molasses, rum, crushed  cloves, allspice, and cinnamon.</td><td>12</td></tr>
<tr><td>Jodenkoek</td><td>Netherlands</td><td>Large, flat, round shortbread cookies.</td><td>12</td></tr>
<tr><td>Jumble</td><td>[England, possible roots in Italy]][citation needed]</td><td>Cookie-like pastries whose simple recipe comprises nuts, flour, eggs, and sugar, with vanilla, anise, or caraway seed used for flavoring.</td><td>12</td></tr>
<tr><td>Kaasstengels</td><td>Netherlands and Indonesia</td><td>In Indonesia, Kaasstengels usually eaten on Christmas and Lebaran celebrations.</td><td>12</td></tr>
<tr><td>Kahk</td><td>Egypt</td><td>Small round cookies filled with ‘agameya (عجمية, a mixture of honey, nuts, and ghee), lokum, nuts, or dates and dusted with powdered sugar. Traditionally eaten on Eid al-Fitr and Easter.</td><td>10</td></tr>
<tr><td>Khapse</td><td>Tibet</td><td>Simple cookies made of flour, butter, eggs and sugar that come in various shapes with various decorations.</td><td>11</td></tr>
<tr><td>Kichel</td><td>Israel</td><td>Jewish and Israeli sweet cracker or cookie commonly made with egg and sugar rolled out flat and cut into large diamond shapes. They are typically eaten with a savory dip or topping.</td><td>9</td></tr>
<tr><td>Kleicha</td><td>Iraq, Saudi Arabia</td><td>National cookie of Iraq that contains a filling of dried fruit (usually dates) and is flavored with cardamom and sometimes rose water.</td><td>5</td></tr>
<tr><td>Koulourakia</td><td>Greece</td><td>Butter-based pastry that is traditionally hand-shaped in a ring form, glazed with egg and sprinkled with sesame.  It is usually made at Easter to be eaten after Holy Saturday.</td><td>5</td></tr>
<tr><td>Kourabiedes</td><td>Greece</td><td>Butter cookies (biscuits) that resemble light and airy shortbread, but are typically made with the addition of almonds. They may be flavored with vanilla, rose water, or liquors such as metaxa.</td><td>5</td></tr>
<tr><td>Krumiri</td><td>Italy</td><td>Made without water from wheat flour, sugar, butter, eggs and vanilla, in the form of a slightly bent, rough-surfaced cylinder.</td><td>6</td></tr>
<tr><td>Krumkake</td><td>Norway</td><td>Cookie batter is cooked on a special iron.</td><td>7</td></tr>
<tr><td>Kue gapit</td><td>Indonesia (Cirebon)</td><td>An Indonesian cookie made from Rice flour, Wheat flour, Chicken egg, Coconut water, salt, sugar, and cinnamon.</td><td>10</td></tr>
<tr><td>Kue satu</td><td>Indonesia</td><td>Kue satu or Kue koya is a popular traditional cookie of white-colored sweet mung beans that is crumbled when being bitten.</td><td>16</td></tr>
<tr><td>Lady Finger (cookie)</td><td>Europe</td><td>Light, sweet sponge cakes that are shaped like fingers and are commonly used to prepare desserts such as tiramisu, trifle and charlotte.</td><td>17</td></tr>
<tr><td>Lebkuchen</td><td>Germany</td><td>Gingerbread with many regional varieties and specialities.</td><td>17</td></tr>
<tr><td>Lengua de gato</td><td>Philippines</td><td>Very thin oval-shaped butter cookies from the Philippines</td><td>11</td></tr>
<tr><td>Lincoln biscuit</td><td>United Kingdom</td><td>Short dough biscuit and a kind of shortcake biscuits. It has a pattern of dots on the top in concentric circles and was brought to America by British expats.</td><td>7</td></tr>
<tr><td>Linga</td><td>Philippines</td><td>Flat cookies with sesame seeds from the Davao del Sur in the Philippines.</td><td>10</td></tr>
<tr><td>Ma'amoul</td><td>Arab world</td><td>Ma'amoul is an ancient Arab filled pastry or cookie made with dates, nuts such as pistachios or walnuts and occasionally almonds, or figs.</td><td>15</td></tr>
<tr><td>Macaroon</td><td>Europe</td><td>Consists of a paste of egg whites with other ingredients such as almond, hazelnut and/or coconut that is placed on a wafer and then baked.</td><td>15</td></tr>
<tr><td>Macaron</td><td>France</td><td>Not to be confused with macaroons, these colorful, sweet, meringue-based sandwich cookies are often filled with ganache, buttercream or jam.</td><td>15</td></tr>
<tr><td>Malted milk (biscuit)</td><td>Uttoxeter, England</td><td>First produced by Elkes Biscuits of Uttoxeter (now owned by Fox's Biscuits) in 1924. They are named after their malt flavouring and milk content.</td><td>20</td></tr>
<tr><td>Maple leaf cream cookies</td><td>Canada</td><td>Sandwich cookie with a maple-flavored cream filling.</td><td>17</td></tr>
<tr><td>Marie biscuit</td><td>United Kingdom</td><td>Rich cookie made with wheat flour, sugar, vegetable oil and vanilla flavoring. It is usually eaten for tea and dunked in tea or coffee.</td><td>8</td></tr>
<tr><td>Masa podrida</td><td>Philippines</td><td>Dry crumbly shortbread cookie from the Philippines made from flour, salt, sugar, shortening and eggs</td><td>16</td></tr>
<tr><td>Moravian spice cookies</td><td>United States</td><td>Very thin cookie that contains various spices and molasses.</td><td>11</td></tr>
<tr><td>Nice biscuit</td><td>United Kingdom</td><td>Coconut flavored, this is otherwise a plain biscuit which does not contain cream or jam.</td><td>14</td></tr>
<tr><td>Nocciolini di Canzo</td><td>Lombardy, Italy (Canzo)</td><td>Small biscuits similar to dry Amaretto, with hazelnut flour. Typical of the town of Canzo.</td><td>19</td></tr>
<tr><td>Oat crisps</td><td>Unknown</td><td>Small, round and flat baked biscuits made from oat, sugar and butter and sometimes flour with additional flavoring such as ginger and syrup.</td><td>17</td></tr>
<tr><td>Oatmeal raisin</td><td>Scotland, United States</td><td>Oatmeal cookies are the descendants of oat cakes made by the Scots, going back to the time when the Romans attempted to conquer Scotland. Oat cakes first appeared when they began harvesting oats as far back as 1,000 B.C. It isn't known how or when raisins were added to the mix, but raisins and nuts have been used since the Middle Ages. The first recorded oatmeal raisin cookie recipe was written by Fannie Merritt Farmer in 1896, and billed as a “health food”.[2][3]</td><td>16</td></tr>
<tr><td>Oreo</td><td>United States</td><td>Brand-name.  Consists of two chocolate-flavored round biscuits with a white creme filling in between them. There are now a number of different variations of Oreo, consisting of various flavors of filling and cookie combinations, as well as different sizes [4]</td><td>15</td></tr>
<tr><td>Otap</td><td>Philippines</td><td>Oval-shaped puff pastry cookie from the Philippines</td><td>12</td></tr>
<tr><td>Paciencia</td><td>Philippines</td><td>Filipino meringue eggdrop cookies</td><td>5</td></tr>
<tr><td>Paborita</td><td>Philippines</td><td>Filipino disc-shaped biscuits with a flaky texture.</td><td>17</td></tr>
<tr><td>Panellets</td><td>Spain</td><td>Small cakes or cookies in different shapes, mostly round, made mainly of marzipan (almond paste). They are often decorated with pine nuts and varnished in egg white.</td><td>19</td></tr>
<tr><td>Paprenjak</td><td>Croatia</td><td>Typical Croatian cookie that is known for containing pepper beside sugar syrup or honey, butter, various nuts and other spices.</td><td>11</td></tr>
<tr><td>Party ring</td><td>United Kingdom</td><td>Commercial circular cookie with a central hole that comes in various colour combinations. Each biscuit is topped with a layer of hard icing with "wiggly" lines in a different colour.</td><td>12</td></tr>
<tr><td>Peanut butter cookie</td><td>United States</td><td>Features peanut butter as a main ingredient.</td><td>18</td></tr>
<tr><td>Petit-Beurre</td><td>Nantes, France</td><td>A type of butter cookie</td><td>13</td></tr>
<tr><td>Pepernoten</td><td>Netherlands</td><td>Baked traditionally during Sinterklaas, a feast on December 5</td><td>6</td></tr>
<tr><td>Piaya</td><td>Philippines</td><td>A muscovado-filled unleavened flatbread from the Philippines</td><td>16</td></tr>
<tr><td>Pignolo (macaroon)</td><td>Italy (Sicily)</td><td>Moist, soft and chewy cookie that is of a light golden color, made from almond paste and studded with golden pine nuts (also called pignoli). (At the left in the picture.)</td><td>9</td></tr>
<tr><td>Pinwheel cookies</td><td></td><td>Refrigerator cookies made by rolling two differently colored doughs</td><td>16</td></tr>
<tr><td>Pizzelle</td><td>Italy</td><td>Waffle or wafer cookies made from flour, eggs, sugar, butter or vegetable oil, and flavoring (often vanilla, anise, or lemon zest) that can be hard and crisp or soft and chewy depending on the ingredients and method of preparation.</td><td>15</td></tr>
<tr><td>Puto seco</td><td>Philippines</td><td>A dry powdery cookie made from cornstarch and flour</td><td>17</td></tr>
<tr><td>Putri salju</td><td>Indonesia</td><td>A kind of Indonesian cookie which is crescent-shaped and coated with powdered sugar covered like snow. In Indonesian language, Putri salju means "snow princess"</td><td>7</td></tr>
<tr><td>Rainbow cookie</td><td>United States</td><td>Small cake with layers of almond-based sponge cake in different colours, apricot and/or raspberry jam, and a chocolate coating. A variation resembles the Italian flag and is called Italian Flag Cookie.</td><td>10</td></tr>
<tr><td>Reshteh Khoshkar</td><td>Iran</td><td>Made of rice, flour, sugar, walnut, cardamom, cinnamon, ginger and spice that is slowly fried in hot oil or fat.</td><td>20</td></tr>
<tr><td>Ricciarelli</td><td>Italy (Siena)</td><td>Flavored with ground almonds and topped with icing sugar.</td><td>15</td></tr>
<tr><td>Rich tea</td><td>United Kingdom</td><td>Sweet biscuit whose ingredients generally include wheat flour, sugar, vegetable oil, and malt extract. Due to its consistency it is ideal for being dunked into coffee or tea and is therefore usually consumed with tea (see Dunking (biscuit)).</td><td>7</td></tr>
<tr><td>Rosca</td><td>Philippines</td><td>Philippine cookies shaped like an elbow</td><td>14</td></tr>
<tr><td>Rosette</td><td>Scandinavia</td><td>Thin, deep-fried wafers</td><td>5</td></tr>
<tr><td>Rosquillo</td><td>Philippines</td><td>Philippine cookies made from flour, eggs, shortening, sugar, and baking powder.</td><td>8</td></tr>
<tr><td>Rum ball</td><td></td><td>Ground biscuits with rum and binders like chocolate</td><td>17</td></tr>
<tr><td>Russian tea cake</td><td>Russia[citation needed]</td><td>Jumble-like pastry that generally consists entirely of ground nuts, flour and water or, more commonly, butter. After baking, it is coated in powdered sugar while still hot, then again once the cookie has cooled.</td><td>20</td></tr>
<tr><td>Sandwich cookie</td><td></td><td>Two hard cookies held together by a soft filling</td><td>7</td></tr>
<tr><td>Semprong</td><td>Indonesia, Malaysia, Brunei, and Singapore</td><td>Semprong, kue semprong, Sapit, Sepit, Kue belanda or Kapit is a traditional wafer snack (Kue or kuih) made by clasping egg batter using an iron mold.</td><td>14</td></tr>
<tr><td>Shortbread</td><td>United Kingdom (Scotland)</td><td>Very rich unleavened biscuit that is made from one part white sugar, two parts butter, and three parts flour. It is available in different shapes and flavors (e.g. lemon flavor). See List of shortbread biscuits and cookies for a list of varieties.</td><td>13</td></tr>
<tr><td>Silvana</td><td>Philippines</td><td>A frozen cookie made from a layer of buttercream sandwiched between two cashew-meringue wafers coated with cookie crumbs</td><td>13</td></tr>
<tr><td>Snickerdoodle</td><td>United States (New England)</td><td>Sugar cookie made with butter or oil, sugar, and flour rolled in cinnamon sugar. Most distinctive feature is the cracked surface that can be crisp or soft depending on preparation.</td><td>11</td></tr>
<tr><td>Speculaas</td><td>NetherlandsBelgiumGermany</td><td>Very flat Christmas shortcrust biscuit that contains typical Christmas spices such as cinnamon, nutmeg, white pepper, cardamom, ginger and cloves.</td><td>6</td></tr>
<tr><td>Springerle</td><td>Germany</td><td>Very hard anise cookie made from eggs, flour and sugar with an embossed design that is impressed before baking. It is a typical treat for Christmas.</td><td>19</td></tr>
<tr><td>Stroopwafel</td><td>Netherlands and Indonesia</td><td>Waffle cookie made from two thin layers of baked batter with a caramel-like syrup filling in the middle.</td><td>15</td></tr>
<tr><td>Sugar cookie</td><td>Europe</td><td>Very simple cookie made from sugar, flour, butter, eggs, vanilla, and either baking powder or baking soda. They are often glazed with icing and decorated with chocolate or sprinkles and may be themed according to season (e.g. Halloween cookies or Christmas cookies).</td><td>7</td></tr>
<tr><td>Tahini cookie</td><td>Israel</td><td>The traditional way to cook tahini cookies is to mix the flour, sugar and butter until there is crumbly mixture and then add the raw tahini and continuing to mix and put the mixture in a round position and add on the cookie almonds or pine nuts, and then it is cooked until it's finished.</td><td>14</td></tr>
<tr><td>Tareco</td><td>Brazil</td><td>Little tough disk-shaped biscuit that is made of wheat flour, eggs, and sugar.</td><td>7</td></tr>
<tr><td>Teiglach</td><td>Lithuania</td><td>Small, knotted Jewish pastries boiled in a honeyed syrup and often filled with nuts or raisins and topped with shredded coconut.</td><td>19</td></tr>
<tr><td>Tirggel</td><td>Switzerland</td><td>Very thin, hard and sweet Christmas biscuits that are made from flour and honey</td><td>5</td></tr>
<tr><td>Toll House Cookie</td><td>United States (Massachusetts)</td><td>Chocolate chip cookie from the manufacturer Toll House Inn</td><td>6</td></tr>
<tr><td>Ube crinkles</td><td>Philippines</td><td>Filipino cookies made from purple yam, flour, eggs, baking powder, butter, and sugar.</td><td>19</td></tr>
<tr><td>Ugoy-ugoy</td><td>Philippines</td><td>Filipino rectangular layered biscuits coated in granulated sugar</td><td>16</td></tr>
<tr><td>Vanillekipferl</td><td>Austria</td><td>Small, crescent shaped biscuits that are made from a pastry that contains hazelnut and/or almonds and vanilla sugar and are rolled in vanilla sugar after baking</td><td>6</td></tr>
<tr><td>Wafer</td><td>Unknown</td><td>Crisp, often sweet, very thin, flat, and dry biscuit, often used to decorate ice cream. Wafers can be made into cookies with cream flavoring sandwiched between them. Also used in religious celebrations, such as Western Rite celebrations of the Eucharist.</td><td>9</td></tr>
<tr><td>Wibele</td><td>Germany</td><td></td><td>13</td></tr>
</body>
</html>

`;
  let url = req.url;
  let cookie = req.headers.cookie;
  header = {
    "Content-Type": "text/html",
  }
  initial_cookies = []
  for (const [key, value] of Object.entries(cookie_types)) {
    let c = utils.getCookie(cookie, key);
    if (!c) {
      initial_cookies.push(key + "=0;");
    }
  }
  header["Set-Cookie"] = initial_cookies;
  for (const [key, value] of Object.entries(cookie_types)) {
    let c = utils.getCookie(cookie, key);
    if (c !== value.toString()) {
      return [
        header,
        html,
      ];
    }
  }
  return [
    {
      "Content-Type": "text/html",
      flag: flag,
    },
    `
    <!DOCTYPE html>
<html>
<head>
<title>curling-2</title>
</head>
<body>

<h1>Congratulations!</h1>
<p>Bob sent you the flag, but he doesn't want to display it on your browser. Where might more information be stored in Bob's response?</p>

</body>
</html>
`,
  ];
}

module.exports = { page };
