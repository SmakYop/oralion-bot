module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {

        const channel = '709157893819203754';
        const memberRole = '873949710753366056';
 
        const reactEmoji = '✅';
        
        message.channel.send('**RÈGLEMENT DU SERVEUR DISCORD**')
        message.channel.send('—   Tout pseudonyme, avatar, statut et message provocateur, discriminatoire, violent, menaçant, intrusif, extrémiste ou sexuel est interdit au même titre que l’utilisation abusive de majuscules, d’émoticônes ou autre symbole quelconque. Par extension, le spam et le flood sont également interdits. De plus, les pseudonymes, statuts et messages trop longs, incompréhensibles ou contenant trop de caractères spéciaux sont à éviter. Le staff se réserve la possibilité de changer votre pseudonyme sur le serveur si celui-ci ne respecte pas les conditions évoquées plus tôt. \n'
        + '—   Sur les plateformes vocales, les cris et autres sons désagréables à entendre et/ou dégradants sont interdits. L’utilisation de soundboards est vivement déconseillée, bien qu’autorisée dans un cadre raisonnable. \n'
        + '—   Le harcèlement, les menaces et la diffusion d’informations personnelles sont strictement interdits. \n'
        + '—   La promotion de toute plateforme non rattachée à Oralion est interdite, qu’elle soit à des fins personnelles ou professionnelles. Par exemple : un lien de parrainage, une invitation à un autre serveur, un code créateur ou même votre propre chaîne. De ce fait, envoyer des liens est interdit. La publicité et les liens en statut Discord sont tolérés à condition que ceux-ci ne renvoient pas vers une plateforme illégale, malveillante ou à contenu pornographique. Cependant, si nous acceptons la publicité en statut Discord, des sanctions pourront être envisagées si vous incitez dans le chat les joueurs à lire celui-ci pour promouvoir son contenu.\n'
        + '—   Les sujets de discussion tels que la religion ou la politique sont à éviter. \n'
        + '—   Mentionner des personnes du serveur sans aucune raison apparente est interdit. \n');

        let messageEmbed = await message.channel.send('—   Chaque salon a son but et ses propres règles qu’il vous sera nécessaire de respecter. \n\n\n'
        + '**Le staff se réserve le droit de supprimer un message, renommer, changer de salon vocal, rendre muet, expulser ou bannir un utilisateur sans avertissement en fonction des circonstances. De plus, un message volontairement mal orthographié ou écrit en langage SMS peut se voir ignoré. Le troll, dans un cadre abusif, pourra aussi être ignoré voire sanctionné.** \n\n\n'
        + '**Dernière mise à jour : le 07/08/2021**');
        messageEmbed.react(reactEmoji);

 
        /*client.on('messageReactionAdd', async (reaction, user) => {    
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === reactEmoji) {
                    reaction.message.guild.members.cache.get(user.id).roles.add(memberRole);
                }
            } else {
                return;
            }
 
        });*/
    }
}