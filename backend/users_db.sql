-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: nanarflix
-- ------------------------------------------------------
-- Server version	8.0.32
​
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
​
--
-- Table structure for table `users`
--
​
DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `biography` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
​
--
-- Dumping data for table `users`
--
​
LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jean-Baptiste','Blond','jbblond@gmail.com','jbblond','Jean-Baptiste est très attentif aux besoins des autres et a un grand sens de la générosité. Musicien a ses heures perdues, gamers et cinéphile, ses multiples talents éblouissent jusqu\'au soleil lui-même.'),(2,'Julien','LeRoux','jleroux@gmail.com','jleroux','Julien a une grande capacité d\'empathie et semble souvent fatigué. D\'un calme a toute épreuve, tel le rocher inflexible, il ne sera jamais la source de l\'incendie car tous les obstacle se gèrent, je cite, \'Comme un lundi\'.'),(3,'Angélique','Chartrain','achartrain@gmail.com','achartrain','Angélique est franche et dynamique. Sa patience n\'a d\'égal que sa persévérance, devant elle le code fait révérence, laisse la râler sans raison, sinon, c\'est la \'baston\'.'),(4,'Erwan','Cherel','echerel@gmail.com','echerel','Erwan est curieux et autonome, entre soif de connaissance et tasse de thé. Sur Code VS, au contraire de Linguini, il écrit la recette de la réussite, mais sans besoin d\'un Rémi.'),(5,'Benjamin','Laroche','blaroche@gmail.com','blaroche','Benjamin est un bon daron. Il a deux grandes passions: le gaming et le sport. Agissant pour le bien d\'autrui, comme dans Call of Duty, de la bonté plein le chargeur, il tire en plein coeur.'),(6,'Marion','Baston','mbaston@gmail.com','mbaston','Ingénieuse et débrouillarde, Marion se dépatouille des plus sombres magouilles. ne vous fiez pas a son air \'angélique\', la détermination dont elle fait preuve vous fera l\'effet d\'une bombe atomique.'),(7,'Luc','Lefebure','llefebure@gmail.com','llfebure','Homme au foyer, Luc cherche a exercer un contrôle absolu sur ceux qui l\'entourent, a la heuteur de l\'amour qu\'il leur porte. Son mauvais karma plâne sur lui comme les nuages surplombent Arkham. mais tel batman, sa bonté vient régler ses problèmes a coup de tatanes.'),(8,'Florian','Esnault','fesnault@gmail.com','fesnault','Peu d\'effort pour un résultat optimal, tel est le crédo de Florian. Solitaire, mettez-le dans une grotte avec pc et denrées et il en sortira puissant et fort, son site web fini.'),(9,'Jessica','Ribeiro','jribeiro@gmail.com','jribeiro','Jessica manie humour et modestie avec habileté, mais malgré son humilité, un secret demeure caché. Jessica est Exceptionnelle, bien sur !'),(10,'Bertrand','Robert','brobert@gmail.com','brobert','Nonchalance, telle est sa devise. On peut le croire perdu ou tendu, mais sortir un code efficace, c\'est sa mission ! Il pianote sur son clavier pour manier Git, comme Orphée sur sa lyre devant le Styx.'),(11,'Illias','Ryffel','iryffel@gmail.com','iryffel','Ilias est un Serpentard de l\'extrême : capuche, bonnet, son visage est toujours camouflé par un couvre-chef. D\'une volonté a toute épreuve, il EST Dieu.'),(12,'Camille','Le Gloanic','clegloanic@gmail.com','clegloanic','Vous avez dit maman-louve , appelez Camille. Avec du chocolat et du thé, elle est capable d\'écouter avec autant de patience qu\'il en faut pour coder du JS.'),(13,'Quentin','Silmain','qsilmain@gmail.com','qsilmain','Responsable du Crewstibat, Quentin est polyvalent et adepte du bien nommé ChatGPT. Mégalomaniaque. Veut devenir Dieu'),(14,'Alicia','Coquerant','acoquerant@gmail.com','acoquerant','Déterminée a se faire une place parmis les Grands du Code, Alicia est d\'une patience a toute épreuve. Ses aiguilles déroulent le fil de ses ambitions, méthodique et mélodique.'),(15,'Cassandra','Heroin','cheroin@gmail.com','cheroin','Création, imagination, Cassandra retiendra toute votre attention. Aussi bien en code qu\'en parole, elle est volubile, qui aurait cru qu\'un aussi petit corps cachait une personne aussi habile !'),(16,'Xavier','Georget','xgeorget@gmail.com','xgeorget','Le Maître du Code et du lion.');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;
​
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;