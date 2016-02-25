from django.shortcuts import render, HttpResponseRedirect
from django.core.urlresolvers import reverse

from pages.forms import ContactForm
from django.core.mail import send_mail

def contact(request):
    form_class = ContactForm
    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get(
                'contact_name'
            , '')
            contact_email = request.POST.get(
                'contact_email'
            , '')
            form_subject = request.POST.get(
                'subject'
            , '')
            form_content = request.POST.get('content', '')

            subject = 'You have received a message sent via your website'

            message = 'Sender: ' + contact_name + '\n'
            message +='Email: ' + contact_email + '\n'
            message +='Subject: ' + form_subject + '\n\n'
            message += form_content

            send_mail(subject, message, 'nmuldavindummy@gmail.com', ['nmuldavin@gmail.com'], fail_silently=False)

            return HttpResponseRedirect(reverse('pages:contactsuccess'))

    return render(request, 'pages/contact.html', {
        'form': form_class,
    })
