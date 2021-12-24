from django import forms

class OrderForm(forms.Form):
    cleaningType = forms.CharField()
    area = forms.CharField()
    # servicesInOrder = forms.CharField()
    # date = forms.CharField()
    # time = forms.CharField()
    # firstName = forms.CharField()
    # secondName = forms.CharField()
    # phone = forms.CharField()
    # email= forms.CharField()
