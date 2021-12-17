from django.contrib import admin
from .models import CleaningType, Service, ServicesInOrder, User, Order, Status


class ServicesInOrderInline(admin.StackedInline):
    model = ServicesInOrder
    extra = 1


@admin.register(CleaningType)
class CleaningTypeAdmin(admin.ModelAdmin):
    pass

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass

@admin.register(ServicesInOrder)
class ServicesInOrderAdmin(admin.ModelAdmin):
    pass

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Status)
class StatusAdmin(admin.ModelAdmin):
    pass

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    inlines = [ServicesInOrderInline]
    # pass
